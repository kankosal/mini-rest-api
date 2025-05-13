import axios from "axios";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username !== "dara" || password !== "secret") {
      return res.status(401).json({
        error: "Unauthenticated.",
      });
    }

    if (process.env.API_TYPE == "rest") {
      return res.status(200).json({
        data: {
          id: "12345",
          employee_id: "E12345",
          department: "IT",
          gender: "Male",
          email: "john.doe@example.com",
          phone_number: "+1234567890",
          position: "Software Engineer",
          full_name: "John Doe",
          status: "Active",
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWVmMjMxODgwMzQwOTQ5YjUwNDY5NCIsInVzZXJuYW1lIjoianRvZG9lIiwiYXBwSWQiOiIwMDAwMDUiLCJpYXQiOjE3NDExODU2MzAsImV4cCI6MTc3MjcyMTYzMH0.YrH4dMMSfmg7MnuYJqhMiMO73U4_ki-z188WLqbXPPg",
          token_expired_at: 1772721630,
          created_at: 1672531199000,
          updated_at: 1672531199000,
          deleted_at: null,
        },
      });
    }

    // GraphQL mutation for user login
    let data = JSON.stringify({
      query: `mutation UserLogin($input: UserLoginInput!) {
        userLogin(input: $input) {
          id
          appId
          username
          createdAt
          updatedAt
          userAccess {
            accessToken
            refreshToken
            expiredIn
          }
        }
      }`,
      variables: { input: { username, password } },
    });

    let config = {
      method: "post",
      url: process.env.SSO_API_URL,
      headers: { "Content-Type": "application/json" },
      data: data,
    };

    // Forward request to SSO API
    const response = await axios.request(config);

    // Return response from SSO API
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(error.response?.status || 500).json({
      error: error.response?.data || "Error forwarding request",
    });
  }
};

export default login;

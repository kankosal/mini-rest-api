import { ClientProxyFactory, Transport } from "@nestjs/microservices";

const clientUserAPi = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: {
    host: "127.0.0.1",
    port: 8878,
  },
});

export default clientUserAPi;

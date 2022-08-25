import { NextApiHandler } from "next";

type Payload = { email: string; password: string };

const SignupHandler: NextApiHandler = async (req, res) => {
    const { email, password }: Payload = req.body;
};

export default SignupHandler;

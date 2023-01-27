const { log } = console;
export default function userSignup(req: any, res: any) {
    if (req.method === "POST") {
        const reqPayload = req?.body;
        log("Req Payload", reqPayload);
        return res.json({ msg: "hello world" });
    }
    return res.status(500).json({
        msg: "This needs to be a post request",
    });
}

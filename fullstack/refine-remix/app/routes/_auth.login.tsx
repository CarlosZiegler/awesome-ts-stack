export default function Login() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form action="/auth/google/" method="post">
        <button type="submit">Sign in</button>
      </form>
      <p>
        Powered by
        <img
          style={{ padding: "0 5px" }}
          alt="Google"
          src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
        />
        Google
      </p>
    </div>
  );
}

export function register() {
  const hostname: string | undefined = process.env.NEXT_HOSTNAME;
  const isEmailActive: string | undefined = process.env.NEXT_EMAIL;
  const crontab: string | undefined = process.env.NEXT_CRONTAB;

  if (crontab) {
    setInterval(
      () => {
        if (isEmailActive && isEmailActive === "true") {
          if (hostname) {
            sendEmail(hostname);
          }
        }
      },
      parseInt(crontab) * 1000,
    );
  }
}

const sendEmail = async (url: string | undefined) => {
  await fetch(`${url}/api/crontab`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

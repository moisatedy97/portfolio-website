export function register() {
  const isEmailActive: string | undefined = process.env.NEXT_EMAIL;

  if (isEmailActive && isEmailActive === "true") {
    sendEmail();
  }
  // setInterval(
  //   () => {
  //     if (isEmailActive && isEmailActive === "true") {
  //       if (hostname) {
  //         sendEmail(hostname);
  //       }
  //     }
  //   },
  //   parseInt(crontab) * 1000,
  // );
}

const sendEmail = async () => {
  const hostname: string | undefined = process.env.NEXT_HOSTNAME;
  const crontab: string | undefined = process.env.NEXT_CRONTAB;

  if (crontab && hostname) {
    await fetch(`${hostname}/api/crontab`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    setTimeout(sendEmail, parseInt(crontab) * 1000);
  }
};

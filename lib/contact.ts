export const FORM_SUBMIT_URL = "https://formsubmit.co/ajax/mohitjalan947@gmail.com";

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactMessage) {
  const response = await fetch(FORM_SUBMIT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: "Portfolio Contact Request",
      _template: "table",
      _autoresponse: "Thanks for reaching out! I will reply soon.",
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(
      errorData?.message || "Failed to send message. Please try again."
    );
  }

  return response.json();
}

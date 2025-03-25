import React from "react";
import { Form, Input, Button, Card, CardBody, Textarea, Divider, Snippet } from "@heroui/react";
import { ExternalLink, Mail } from "lucide-react";

const socials = {
  email: 'noelitocalma@gmail.com',
  linkedin: 'https://www.linkedin.com/in/noelitocalma'
}

export default function HireMe() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const data: any = Object.fromEntries(new FormData(event.currentTarget));
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-6xl font-bold uppercase">Get in touch!</h1>

      <Card radius="sm" className="mt-10">
        <CardBody className="p-5">
          <p className="mb-6">
            Please reach out to me with any of these channels.
          </p>

          <div className="flex flex-col gap-2">
            <Snippet
              codeString={socials.email}
              color="success"
              tooltipProps={{
                content: "Send an email"
              }}
              copyIcon={<Mail className="w-4 h-4" />}
              onCopy={() => window.open(`mailto:${socials.email}`, '_blank')}
            >
              <span>ping {socials.email}</span>
            </Snippet>

            <Snippet
              tooltipProps={{
                content: "Open LinkedIn Profile"
              }}
              copyIcon={<ExternalLink className="w-4 h-4" />}
              codeString={socials.linkedin}
              color="success"
              onCopy={() => window.open(socials.linkedin, '_blank')}
            >
              <span>ping linkedin.com</span>
            </Snippet>
          </div>

          <div className="relative my-5 flex items-center">
            <small className="bg-white dark:bg-gray-700 absolute left-0 right-0 m-auto w-10 text-center text-gray-400 rounded-md">OR</small>
            <Divider />
          </div>

          <Form className="w-full" onSubmit={onSubmit}>
            <div className="flex flex-col gap-8 w-full">
              <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Your email (so I can contact you)"
                labelPlacement="outside"
                name="email"
                placeholder="What is your email address?"
                type="email"
              />

              <Input
                isRequired
                errorMessage="Subject is required"
                label="What is your message about?"
                labelPlacement="outside"
                name="email"
                placeholder="What is your message about?"
                type="email"
              />

              <Textarea
                isRequired
                minRows={20}
                errorMessage="Message is required"
                label="I’d love to hear from you!"
                labelPlacement="outside"
                name="email"
                placeholder="Got any feedback or thoughts?"
                type="email"
              />
            </div>

            <Button type="submit" variant="solid" color="primary" className="w-full mt-5">
              Let&apos;s Connect
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}


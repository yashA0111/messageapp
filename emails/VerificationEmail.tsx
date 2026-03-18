import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";

interface OTPEmailProps {
  otp?: string;
  userName?: string;
  expiryMinutes?: number;
}

export default function OTPEmail({
  otp = "482916",
  userName = "there",
  expiryMinutes = 10,
}: OTPEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Your verification code is {otp} — valid for {String(expiryMinutes)} minutes
      </Preview>
      <Body style={bodyStyle}>
        <Container style={cardStyle}>

          {/* Header */}
          <Section style={headerStyle}>
            <Text style={logoStyle}>MessageApp</Text>
            <Heading style={headingStyle}>Verify your identity</Heading>
            <Text style={subheadingStyle}>
              One-time passcode for account registration
            </Text>
          </Section>

          {/* Body */}
          <Section style={sectionStyle}>
            <Text style={greetingStyle}>
              Hey {userName},<br />
              Welcome aboard. Use the code below to complete your sign-up.
              It&apos;s valid for{" "}
              <span style={{ color: "#a5b4fc" }}>{String(expiryMinutes)} minutes</span>.
            </Text>

            {/* OTP Box */}
            <Section style={otpContainerStyle}>
              <Text style={otpLabelStyle}>Your verification code</Text>
              <Text style={otpCodeStyle}>{otp}</Text>
              <Text style={expiryStyle}>
                ⏱ Expires in {String(expiryMinutes)} minutes
              </Text>
            </Section>

            <Hr style={dividerStyle} />

            {/* Security Warning */}
            <Section style={warningStyle}>
              <Text style={warningTextStyle}>
                <strong style={{ color: "#c4a0d8" }}>Security notice:</strong> We
                will never ask for this code over the phone or via chat. If you
                didn&apos;t request this, you can safely ignore this email.
              </Text>
            </Section>

            <Text style={signoffStyle}>— The MessageApp Team</Text>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              © 2025 MessageApp Inc. · All rights reserved{"\n"}
              Delhi, India · Unsubscribe
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

const bodyStyle: React.CSSProperties = {
  backgroundColor: "#06060f",
  fontFamily: "'Georgia', 'Times New Roman', serif",
  margin: "0",
  padding: "40px 20px",
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "#0f0f1a",
  border: "1px solid #1e1e3a",
  borderRadius: "16px",
  maxWidth: "480px",
  overflow: "hidden",
  boxShadow: "0 0 80px rgba(99,102,241,0.1), 0 20px 60px rgba(0,0,0,0.6)",
};

const headerStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  padding: "40px 40px 32px",
  borderBottom: "1px solid #1e1e3a",
};

const logoStyle: React.CSSProperties = {
  fontSize: "13px",
  fontFamily: "'Courier New', monospace",
  letterSpacing: "0.3em",
  color: "#6366f1",
  textTransform: "uppercase",
  margin: "0 0 20px 0",
};

const headingStyle: React.CSSProperties = {
  fontSize: "26px",
  fontWeight: "700",
  color: "#f0f0ff",
  margin: "0 0 8px 0",
  letterSpacing: "-0.5px",
  lineHeight: "1.2",
};

const subheadingStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#8b8ba8",
  margin: "0",
  lineHeight: "1.6",
};

const sectionStyle: React.CSSProperties = {
  padding: "36px 40px",
};

const greetingStyle: React.CSSProperties = {
  fontSize: "15px",
  color: "#c0c0d8",
  lineHeight: "1.7",
  margin: "0 0 28px 0",
};

const otpContainerStyle: React.CSSProperties = {
  backgroundColor: "#13131f",
  border: "1px solid #2a2a4a",
  borderRadius: "12px",
  padding: "28px 24px",
  textAlign: "center",
  marginBottom: "28px",
};

const otpLabelStyle: React.CSSProperties = {
  fontSize: "11px",
  fontFamily: "'Courier New', monospace",
  letterSpacing: "0.25em",
  color: "#6366f1",
  textTransform: "uppercase",
  margin: "0 0 14px 0",
};

const otpCodeStyle: React.CSSProperties = {
  fontSize: "48px",
  fontFamily: "'Courier New', monospace",
  fontWeight: "700",
  letterSpacing: "0.2em",
  color: "#ffffff",
  margin: "0 0 14px 0",
};

const expiryStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#6b6b85",
  fontFamily: "'Courier New', monospace",
  margin: "0",
};

const dividerStyle: React.CSSProperties = {
  borderColor: "#1e1e3a",
  margin: "24px 0",
};

const warningStyle: React.CSSProperties = {
  backgroundColor: "#1a1520",
  border: "1px solid #2d1f3d",
  borderLeft: "3px solid #a855f7",
  borderRadius: "8px",
  padding: "14px 16px",
  marginBottom: "24px",
};

const warningTextStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "#9080a8",
  lineHeight: "1.6",
  margin: "0",
};

const signoffStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#c0c0d8",
  lineHeight: "1.7",
  margin: "0",
};

const footerStyle: React.CSSProperties = {
  padding: "20px 40px 32px",
  borderTop: "1px solid #1a1a2a",
  textAlign: "center",
};

const footerTextStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#4a4a6a",
  lineHeight: "1.7",
  fontFamily: "'Courier New', monospace",
  margin: "0",
  whiteSpace: "pre-line",
};
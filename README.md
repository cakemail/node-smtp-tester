# Description

Test your SMTP account on Cakemail's SMTP relay

# Setup

Install all dependencies

```bash
npm install
```

# Configuration

Edit the `index.js` file and change the first few lines, including your username/password, the mail from and recipient.

# Using

```bash
node index.js
```

# Example output

```bash
╭─sgregoire at localhost in ~/source/nodesmtp on master✘✘✘ using 
╰─± node index.js

[2021-11-18 20:20:36] DEBUG Creating transport: nodemailer (6.7.1; +https://nodemailer.com/; SMTP/6.7.1[client:6.7.1])
[2021-11-18 20:20:36] DEBUG Sending mail using SMTP/6.7.1[client:6.7.1]
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] Resolved smtp.cakemail.dev as 192.99.218.235 [cache miss]
[2021-11-18 20:20:36] INFO  [mqWcHogxPY] Connection established to 192.99.218.235:587
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 220 smtp ESMTP
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] C: EHLO localhost.localdomain
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250-smtp Nice to meet you
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250-PIPELINING
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250-8BITMIME
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250-SMTPUTF8
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250-AUTH LOGIN PLAIN
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250 STARTTLS
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] C: STARTTLS
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 220 Ready to start TLS
[2021-11-18 20:20:36] INFO  [mqWcHogxPY] Connection upgraded with STARTTLS
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] C: EHLO localhost.localdomain
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250-smtp Nice to meet you
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250-PIPELINING
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250-8BITMIME
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250-SMTPUTF8
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250 AUTH LOGIN PLAIN
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] SMTP handshake finished
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] C: AUTH PLAIN ****
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 235 Authentication successful
[2021-11-18 20:20:36] INFO  [mqWcHogxPY] User "sgregoire+demo01@cakemail.io" authenticated
[2021-11-18 20:20:36] INFO  Sending message <48016d9b-aa83-8563-e8ad-bda87de808a7@cakemail.io> to <sgregoire+demo01@cakemail.io>
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] C: MAIL FROM:<sgregoire+demo01@cakemail.io>
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250 Accepted
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] C: RCPT TO:<sgregoire+demo01@cakemail.io>
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 250 Accepted
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] C: DATA
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] S: 354 End data with <CR><LF>.<CR><LF>
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] Content-Type: text/plain; charset=utf-8
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] From: sgregoire+demo01@cakemail.io
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] To: sgregoire+demo01@cakemail.io
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] Subject: sgregoire+demo01@cakemail.io
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] Message-ID: <48016d9b-aa83-8563-e8ad-bda87de808a7@cakemail.io>
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] Content-Transfer-Encoding: 7bit
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] Date: Thu, 18 Nov 2021 20:20:36 +0000
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] MIME-Version: 1.0
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] 
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] sgregoire+demo01@cakemail.io
[2021-11-18 20:20:36] DEBUG [mqWcHogxPY] .
[2021-11-18 20:20:36] INFO  [mqWcHogxPY] <340 bytes encoded mime message (source size 337 bytes)>
[2021-11-18 20:20:37] DEBUG [mqWcHogxPY] S: 250 OK: message queued
[2021-11-18 20:20:37] DEBUG [mqWcHogxPY] Closing connection to the server using "end"
{
  accepted: [ 'sgregoire+demo01@cakemail.io' ],
  rejected: [],
  envelopeTime: 9,
  messageTime: 885,
  messageSize: 340,
  response: '250 OK: message queued',
  envelope: {
    from: 'sgregoire+demo01@cakemail.io',
    to: [ 'sgregoire+demo01@cakemail.io' ]
  },
  messageId: '<48016d9b-aa83-8563-e8ad-bda87de808a7@cakemail.io>'
}
```
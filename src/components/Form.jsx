import { Form } from '../styles/Contact.style'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = ({ setMsgSent }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [buttonActive, setButtonActive] = useState(true)
  const serviceId = import.meta.env.VITE_SERVICE_ID
  const templateId = import.meta.env.VITE_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_PUBLIC_KEY

  const sendEmail = (e) => {
    e.preventDefault()
    setButtonActive(false)
    const templateParams = {
      from_name: name,
      email_id: email,
      message: msg
    }
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setMsgSent(true)
        setName('')
        setMsg('')
        setEmail('')
        e.target.reset()
        setButtonActive(true)
        setTimeout(() => {
          setMsgSent(false)
        }, 2000)
      })
      .catch((error) => {
        console.log(error.text)
      })
  }

  return (
    <>
      <Form action="" method="post" onSubmit={sendEmail}>
        <div className="details-container">
          <label htmlFor="name" className="label-input">
            Name*
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              onBlur={(e) => {
                setName(e.target.value)
              }}
            />
          </label>

          <label htmlFor="email" className="label-input">
            Email*
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              onBlur={(e) => {
                setEmail(e.target.value)
              }}
            />
          </label>
        </div>

        <label htmlFor="msg" className="label-textarea">
          Your Message*
          <textarea
            name="msg"
            id="msg"
            required
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value)
            }}
            onBlur={(e) => {
              setMsg(e.target.value)
            }}></textarea>
        </label>

        <button
          className={`send_default ${buttonActive ? 'send' : 'send_inactive'}`}
          type="submit"
          disabled={!buttonActive}>
          Say Hi!
        </button>
      </Form>
    </>
  )
}

export default ContactForm

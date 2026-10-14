
const ContactForm = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-sm">
          <div className="flex flex-col gap-xs">
            <label htmlFor="name">Namn*</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="flex flex-col gap-xs">
            <label htmlFor="email">E-post*</label>
            <input type="email" id="email" name="email" required/>
          </div>

          <div className="flex flex-col gap-xs">
            <label htmlFor="phone">Telefon</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="flex flex-col gap-xs">
            <label htmlFor="subject">Ämne*</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="flex flex-col gap-xs md:col-span-2">
            <label htmlFor="message">Meddelande*</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-dark text-light py-2 px-4 rounded-3xl hover:bg-dark/80 transition-colors duration-300 w-full md:w-50">
              Skicka
            </button>
          </div>
        </form>
  )
}

export default ContactForm
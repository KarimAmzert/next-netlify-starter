import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ contact: []})
  .write()
function submit() {  
  db.get('contact')
  .push({ name: document.getElementById("name"), phone: document.getElementById("phone"), message: document.getElementById("message")})
  .write()

}
document.getElementById("submit").addEventListener(submit())
firebase.initializeApp(config);
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Karim Amzert</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="E2069838 - Karim Amzert - applications web 2" />
        <p className="description">
          Patrick Pierre
        </p>
         <p class="name-field">
          <label>Name <span>*</span></label>
          <input type="text" name="name" id="name" required/>
        </p>
        <p class="phone-field">
          <label>Phone</label>
          <input type="text" name="phone" id="phone"/>
        </p>
         <p class="message-field full">
          <label>Message</label>
          <textarea name="message" rows="5" id="message"></textarea>
        </p>
        <p class="submit-button">
          <button type="submit">Submit</button>
        </p>
      </main>

      <Footer />
    </div>
  )
}

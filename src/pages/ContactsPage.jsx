export default function ContactsPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-2 text-blue-500">Welcome to Vilnius</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18452.510789489836!2d25.272890042012666!3d54.68210475321833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9413b1f67c6b%3A0x2600d18d4c454541!2sVilnius%20Old%20Town%2C%20Vilnius%2C%20Vilnius%20City%20Municipality!5e0!3m2!1sen!2slt!4v1692353961954!5m2!1sen!2slt"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

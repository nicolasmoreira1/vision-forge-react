export default function Footer({ content }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>{content.copyright}</p>
      </div>
    </footer>
  );
}

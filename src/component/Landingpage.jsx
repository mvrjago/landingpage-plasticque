import plstc from "../img/assets/Plstc-logo.png";

const Landingpage = () => {
  return (
    <div className="lp-bg">
      <div className="lp-container mx-6">
        <h1 className="has-text-weight-bold mb-4">WELCOME TO PLASTICQUE</h1>
        <p>
          Plasticque is an online platform that provides various events such as,
          Jamming sessions, scarytale, podcastic, radio, and so on. Plasticque
          also provides space for random chatting, looking for friends, and more
        </p>
        <img src={plstc} alt="logo" className="logo my-5" />
        <a
          href="https://discord.gg/feabrNevKN"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button lp-btn has-text-white has-text-weight-medium">
            Join Us!
          </button>
        </a>
      </div>
    </div>
  );
};

export default Landingpage;

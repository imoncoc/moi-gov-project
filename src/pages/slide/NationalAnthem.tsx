const NationalAnthem = () => {
  return (
    <div className="my-4  hover:shadow-md rounded">
      <p className="bg-lime-500 text-white text-center py-2 rounded">
        National Anthem
      </p>
      <audio
        className="py-2 w-full"
        src="https://moi.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/e5f25d4e_f0a7_4b2a_a07c_3ec69a793516/bd_national_anthem.mp3"
        controls
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default NationalAnthem;

const SocialMedia = () => {
  return (
    <div className="my-4 shadow-sm hover:shadow-md rounded">
      <p className="bg-lime-500 text-white text-center text-base py-2 rounded">
        Social Media
      </p>
      <div className="py-2 flex gap-4">
        <img
          className="size-12"
          src="https://moi.gov.bd/themes/responsive_npf/img/social/youtube.png"
          alt=""
        />
        <img
          className="size-12"
          src="https://moi.gov.bd/themes/responsive_npf/img/social/facebook.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialMedia;

import React from "react";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-green-50 text-center p-3 mt-5 border-t-2 border-amber-200">
      <div className="share mb-2">
        <a href="#" className="fab fa-facebook-f pr-3"></a>
        <a href="#" className="fab fa-twitter pr-3"></a>
        <a href="#" className="fab fa-instagram pr-3"></a>
        <a href="#" className="fab fa-linkedin pr-3"></a>
      </div>
      <div className="credit text-sm text-gray-500">
        &copy; copyright @2026 <span>MMK</span> | all rights reserved!
      </div>
    </div>
  );
}

export default Footer;

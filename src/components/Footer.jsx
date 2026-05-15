import React from "react";


export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img
              src="https://media.base44.com/images/public/6a073c2cf9669ff20d3a8fe6/4fc5382e2_image.png"
              alt="Ocean Dreamer Island Tours"
              className="h-12 w-auto object-contain brightness-0 invert opacity-80"
            />
          </div>

          <div className="flex items-center gap-6">
            {["Facebook", "YouTube", "Instagram", "Twitter"].map((social) => (
              <span
                key={social}
                className="font-body text-xs text-background/50 hover:text-background transition-colors cursor-pointer"
              >
                {social}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} Ocean Dreamer Island Tours. All Rights Reserved. Enjoy Tomorrow Today.
          </p>
        </div>
      </div>
    </footer>
  );
}
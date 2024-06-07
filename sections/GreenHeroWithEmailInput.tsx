import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The main title of the hero section.
   */
  title?: string;
  /**
   * @description The description text of the hero section.
   * @format textarea
   */
  description?: string;
  /**
   * @description The placeholder text for the email input field.
   */
  emailPlaceholder?: string;
  /**
   * @description The background color of the hero section.
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description The background image of the hero section.
   */
  backgroundImage?: ImageWidget;
}

export default function HeroSection({
  title = "Join Our Newsletter",
  description = "Stay up to date with our latest news and offers.",
  emailPlaceholder = "Enter your email",
  backgroundColor = "#4ade80",
  backgroundImage,
}: Props) {
  return (
    <section class="bg-green-500 text-white py-20" style={{ backgroundColor }}>
      <div class="container mx-auto px-4">
        {backgroundImage && (
          <div class="absolute inset-0 z-0">
            <img src={backgroundImage} alt="Background" class="w-full h-full object-cover" />
          </div>
        )}
        <div class="relative z-10">
          <h2 class="text-4xl font-bold mb-4">{title}</h2>
          <p class="text-lg mb-8">{description}</p>
          <div class="flex">
            <input
              type="email"
              placeholder={emailPlaceholder}
              class="rounded-l-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button class="bg-white text-green-500 font-bold py-3 px-6 rounded-r-md hover:bg-green-100 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
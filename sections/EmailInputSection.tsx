import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @description The background color of the section.
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description The text for the section title.
   */
  title?: string;
  /**
   * @description The text for the section subtitle.
   * @format textarea
   */
  subtitle?: string;
  /**
   * @description The image to display in the section.
   */
  image?: ImageWidget;
  /**
   * @description The text for the email input placeholder.
   */
  emailPlaceholder?: string;
  /**
   * @description The text for the submit button.
   */
  buttonText?: string;
}

export default function EmailSection({
  backgroundColor = '#4ade80',
  title = 'Join Our Newsletter',
  subtitle = 'Stay updated with our latest news and offers.',
  image,
  emailPlaceholder = 'Enter your email',
  buttonText = 'Subscribe',
}: Props) {
  return (
    <section class={`bg-[${backgroundColor}] py-12`}>
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {image && (
          <div class="w-full md:w-1/2">
            <img src={image} alt="Newsletter" class="w-full h-auto" />
          </div>
        )}
        <div class="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <h2 class="text-4xl font-bold text-white mb-4">{title}</h2>
          <p class="text-white text-xl mb-8">{subtitle}</p>
          <form class="flex items-center">
            <input
              type="email"
              placeholder={emailPlaceholder}
              class="w-full px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              class="bg-white text-green-600 font-bold px-6 py-3 rounded-r-md hover:bg-green-100 transition duration-300"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
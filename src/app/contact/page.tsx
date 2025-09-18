import { CustomLayout } from "@/components/CustomLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
export default function Contact() {
  return (
    <CustomLayout breadcrumbs={()=><Breadcrumbs title="Контакти" />} >
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-12">
          <h2 className="text-3xl font-bold mb-4">Контакти</h2>
          <p className="mb-4">
            Якщо у вас є питання або ви хочете дізнатися більше про наші послуги, будь ласка, зв'яжіться з нами. Ми завжди раді допомогти вам!
          </p>
          <p className="mb-2">
            Телефон: <a href="tel:+380123456789" className="text-blue-600 hover:underline">+38 (012) 345-67-89</a>
          </p>
          <p className="mb-2">
            Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>
          </p>
          <p className="mb-2">
            Адреса: м. Київ, вул. Київська, 123
          </p>
        </div>
      </div>
    </CustomLayout>
  );
}
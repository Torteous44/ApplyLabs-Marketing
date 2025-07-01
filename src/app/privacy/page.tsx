import { privacyPolicy } from '@/data/privacyPolicy';
import { Header, Footer } from '@/components/layout';
import ReactMarkdown from 'react-markdown';

export default function PrivacyPage() {
  return (
    <div className="bg-white text-black min-h-screen w-full">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-h1:text-4xl prose-h1:mb-8 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-strong:font-semibold prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-6 prose-blockquote:rounded-r-lg prose-table:border-collapse prose-table:w-full prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-3 prose-ul:space-y-2 prose-ol:space-y-2">
          <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
} 
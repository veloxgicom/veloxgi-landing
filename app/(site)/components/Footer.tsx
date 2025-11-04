import Section from './Section'
import { LogoWhite } from './Icons'

export default function Footer() {
  return (
    <footer className="mt-12 bg-dark text-slate-100 relative">
      <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden/>
      <Section className="py-12 relative">
        <div className="flex justify-center mb-8">
            <img src="/img/logo-segundarry.png" alt="Logo" width={300} height={100} />

        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-semibold mb-3">Serviços</h5>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:underline">Cartões</a></li>
              <li><a href="#" className="hover:underline">Empréstimos</a></li>
              <li><a href="#" className="hover:underline">Investimentos</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Sobre nós</h5>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:underline">Institucional</a></li>
              <li><a href="#" className="hover:underline">Histórias de criação</a></li>
              <li><a href="#" className="hover:underline">Notícias</a></li>
              <li><a href="#" className="hover:underline">Trabalhe conosco</a></li>
              <li><a href="#" className="hover:underline">Contatos</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold mb-3">Contato</h5>
            <div className="text-slate-300 text-sm">+55 9 872-9543<br/>contato@anonymext.com</div>
            <div className="flex justify-end">
              <span className="inline-flex px-3 py-1 rounded-full bg-brand text-ink text-xs font-semibold">PORTUGUÊS BR</span>
            </div>
          </div>
        </div>
      </Section>
      <div className="border-t border-white/10">
        <Section className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>© 2023 — Bancoo Next</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Termos</a>
            <a href="#" className="hover:underline">Privacidade</a>
            <div className="flex items-center gap-2 text-white">
              <span className="inline-block size-4 rounded-full bg-white" aria-hidden></span>
              <span className="inline-block size-4 rounded-full bg-white/80" aria-hidden></span>
              <span className="inline-block size-4 rounded-full bg-white/60" aria-hidden></span>
            </div>
          </div>
        </Section>
      </div>
    </footer>
  )
}



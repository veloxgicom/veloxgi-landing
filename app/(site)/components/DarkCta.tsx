import Section from './Section'
import GridBgDark from './GridBgDark'
import ActionPill from './ActionPill'
import PhoneCollage from './PhoneCollage'

export default function DarkCta() {
  return (
    <div className="relative py-10 lg:py-14">
      <Section>
        <div className="relative rounded-2xl bg-slate-900 text-slate-100 px-12 py-[70px] grid lg:grid-cols-2 gap-8 overflow-hidden ">
          <GridBgDark />
          <div className="relative z-10">
            <PhoneCollage />
          </div>
          <div className="space-y-5 relative z-10">
            <h2 className="h2 text-white">Empieza hoy: opera más rápido y con menos errores</h2>
            <p className="text-slate-300 max-w-md">Únete a la lista de espera y sé de los primeros en simplificar tu logística, integrar canales y coordinar a tu equipo desde un solo panel.</p>
            <ActionPill>Unirme a la lista de espera</ActionPill>
          </div>
         
        </div>
      </Section>
    </div>
  )
}



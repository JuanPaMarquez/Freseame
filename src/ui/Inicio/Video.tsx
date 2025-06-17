export default function Video() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-gradient-to-l from-[#dcaec0] text-center font-bold text-2xl p-3 w-full">Descripcion</h1>
      <div className="flex items-center justify-center flex-col gap-5 my-3 max-w-[900px] px-5">
        <p>Las fresas con crema son un postre clásico y delicioso que combina la dulzura y frescura de las fresas con la riqueza y suavidad de la crema. A continuación, te presento una descripción detallada de este postre:</p>
        <p className="font-bold">Ingredientes:</p>
        <ul className="max-w-[800px]">
          <li>🍓 Fresas frescas y jugosas</li>
          <li>🍦 Crema para batir o crema chantillí</li>
          <li>🍬 Azúcar o edulcorante (opcional)</li>
        </ul>
        <p className="font-bold">Preparación</p>
        <ul className="max-w-[800px] list-decimal">
          <li><strong>Selección de fresas:</strong> se seleccionan fresas frescas y jugosas, se lavan y se cortan en rodajas o se dejan enteras, según la preferencia.</li>
          <li><strong>Preparación de la crema:</strong> se bate la crema para batir hasta que esté suave y esponjosa. Se puede agregar azúcar o edulcorante según la preferencia.</li>
          <li><strong>Combinación:</strong> se combinan las fresas y la crema en un tazón o recipiente. Se puede decorar con fresas adicionales o un poco de azúcar.</li>
        </ul>
        <p className="font-bold">Características</p>
        <ul className="max-w-[800px] list-disc">
          <li><strong>Sabor:</strong> las fresas con crema tienen un sabor dulce y refrescante, con la dulzura de las fresas y la riqueza de la crema.</li>
          <li><strong>Textura:</strong> la textura es suave y cremosa, con la frescura de las fresas.</li>
          <li><strong>Apariencia:</strong> el postre tiene un aspecto atractivo, con las fresas frescas y la crema suave y esponjosa.</li>
        </ul>
        <p className="font-bold">Beneficios</p>
        <ul className="max-w-[800px] list-disc mb-4">
          <li><strong>Saludable:</strong> las fresas son ricas en vitamina C y antioxidantes, lo que las hace beneficiosas para la salud.</li>
          <li><strong>Refrescante:</strong> el postre es refrescante y perfecto para días calurosos.</li>
          <li><strong>Fácil de preparar:</strong> la preparación es sencilla y rápida, lo que lo hace ideal para cualquier ocasión.</li>
        </ul>
      </div>
    </div>
  )
}
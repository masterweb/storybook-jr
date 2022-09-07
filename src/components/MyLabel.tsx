import './mylabel.css'

export interface Props {
  /**
   * Este es el mensaje o mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Todo capitalizado
   */
  allCaps?: boolean;

  /**
   * Colores basicos del boton
   */
  color?: 'primary'|'secondary'|'tertiary'
}


export const MyLabel = ({ 
  label = 'No label', 
  size = 'normal', 
  allCaps = false,
  color = 'primary'
}: Props) => {
  return (
    <span className={`label ${size} text-${color}`}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

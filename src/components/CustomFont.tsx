
export interface Props {
   /**
   * Texto a mostrar
   */
    label: string;

    fontColor: string
}

export const CustomFont = ({
    label = 'Custom font',
    fontColor = '#fefefe'
}) => {
  return (
    <div>CustomFont</div>
  )
}

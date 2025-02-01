import React, { useEffect, useRef } from 'react';
import opentype from 'opentype.js';

interface HandwritingProps {
  text: string; // Texto a animar
  fontSize?: number; // Tamaño de la fuente en px
  strokeWidth?: number; // Grosor del trazo
  duration?: number; // Duración de la animación en segundos
  strokeColor?: string; // Color del trazo
  fillColor?: string; // Color del relleno
}

const Handwriting: React.FC<HandwritingProps> = ({
  text,
  fontSize = 100,
  strokeWidth = 2,
  duration = 4,
  strokeColor = 'black',
  fillColor = 'black',
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const fontUrl = '/src/assets/fonts/Estonia-Regular.ttf';

    opentype.load(fontUrl, (err, font) => {
      if (err) {
        console.error('Error al cargar la fuente:', err);
        return;
      }

      // Generar el trazado del texto
      const path = font.getPath(text, 0, fontSize - 20, fontSize);
      const pathData = path.toPathData();

      // Calcular dimensiones dinámicas del texto
      const { x1, y1, x2, y2 } = path.getBoundingBox();
      const width = x2 - x1;
      const height = y2 - y1;

      // Agregar un margen superior para evitar que se corte la parte superior
      const marginTop = 20; // Ajusta este valor según el caso
      const adjustedY1 = y1 - marginTop;
      const adjustedHeight = height + marginTop;

      const svgElement = svgRef.current;
      if (svgElement) {
        // Crear los elementos `<path>` para contorno y relleno
        const pathStroke = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        );
        const pathFill = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        );

        // Atributos para el contorno
        pathStroke.setAttribute('d', pathData);
        pathStroke.setAttribute('fill', 'none');
        pathStroke.setAttribute('stroke', strokeColor);
        pathStroke.setAttribute('stroke-width', strokeWidth.toString());
        const totalLength = pathStroke.getTotalLength();
        pathStroke.setAttribute('stroke-dasharray', totalLength.toString());
        pathStroke.setAttribute('stroke-dashoffset', totalLength.toString());
        pathStroke.style.animation = `draw ${duration}s linear forwards`;

        // Atributos para el relleno
        pathFill.setAttribute('d', pathData);
        pathFill.setAttribute('fill', fillColor);
        pathFill.setAttribute('opacity', '0'); // Comienza invisible
        pathFill.style.animation = `fillIn ${duration}s ${
          duration / 2
        }s linear forwards`;

        // Limpiar y agregar los trazados al SVG
        svgElement.innerHTML = '';

        // Crear el clip-path para el efecto de revelado
        const clipPath = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'clipPath'
        );
        clipPath.setAttribute('id', 'revealClip');

        const rect = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'rect'
        );
        rect.setAttribute('x', '0');
        rect.setAttribute('y', '0');
        rect.setAttribute('width', '0');
        rect.setAttribute('height', adjustedHeight.toString());
        rect.style.animation = `reveal ${duration}s linear forwards`;
        clipPath.appendChild(rect);

        // Agregar el clip-path al SVG
        const defs = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'defs'
        );
        defs.appendChild(clipPath);
        svgElement.appendChild(defs);

        // Aplicar el clip-path al contorno y al relleno
        pathStroke.setAttribute('clip-path', 'url(#revealClip)');
        pathFill.setAttribute('clip-path', 'url(#revealClip)');

        svgElement.appendChild(pathFill);
        svgElement.appendChild(pathStroke);

        // Ajustar el viewBox dinámicamente para el texto con el margen superior
        svgElement.setAttribute(
          'viewBox',
          `${x1} ${adjustedY1} ${width} ${adjustedHeight}`
        );
        svgElement.setAttribute('width', `${width}`);
        svgElement.setAttribute('height', `${adjustedHeight}`);
      }
    });
  }, [text, fontSize, strokeWidth, duration, strokeColor, fillColor]);

  return (
    <div>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      />
      <style>
        {`
          @keyframes draw {
            from {
              stroke-dashoffset: 100%;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes fillIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes reveal {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Handwriting;

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  id?: string;
}

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({
  chart,
  id = 'mermaid-diagram',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Initialize mermaid with custom theme
      mermaid.initialize({
        startOnLoad: true,
        theme: 'base',
        themeVariables: {
          primaryColor: '#f97316', // orange-500
          primaryTextColor: '#1f2937', // gray-900
          primaryBorderColor: '#fb923c', // orange-400
          lineColor: '#fb923c',
          secondaryColor: '#fed7aa', // orange-200
          tertiaryColor: '#fff7ed', // orange-50
          background: '#ffffff',
          mainBkg: '#fff7ed',
          secondBkg: '#fed7aa',
          nodeBorder: '#f97316',
          clusterBkg: '#fff7ed',
          clusterBorder: '#fb923c',
          titleColor: '#1f2937',
          edgeLabelBackground: '#ffffff',
          fontSize: '16px',
        },
        flowchart: {
          htmlLabels: true,
          curve: 'basis',
          padding: 15,
        },
      });

      // Render the diagram
      const render = async () => {
        try {
          containerRef.current!.innerHTML = '';
          const { svg } = await mermaid.render(id, chart);
          containerRef.current!.innerHTML = svg;
        } catch (error) {
          console.error('Mermaid rendering error:', error);
          containerRef.current!.innerHTML = `
            <div class="text-red-500 p-4 bg-red-50 rounded-lg">
              Failed to render diagram. Please check the console for details.
            </div>
          `;
        }
      };

      render();
    }
  }, [chart, id]);

  return (
    <div
      ref={containerRef}
      className='mermaid-container bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg border-2 border-orange-200 overflow-x-auto'
    />
  );
};

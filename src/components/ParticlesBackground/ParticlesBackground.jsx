import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-950 to-indigo-950"></div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 0.8,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 60,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.8, max: 1.5 },
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "connect",
              },
              onClick: {
                enable: false,
              },
              resize: true,
            },
            modes: {
              connect: {
                distance: 150,
                radius: 200,
                links: {
                  opacity: 0.2
                }
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
    </div>
  );
};

export default ParticlesBackground;
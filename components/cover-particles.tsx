"use client"

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


const CoverParticles = () => {
        const [ init, setInit ] = useState(false);

        // this should be run only once per application lifetime
        useEffect(() => {
            initParticlesEngine(async (engine) => {
                // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
                // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
                // starting from v2 you can add only the features you need reducing the bundle size
                //await loadAll(engine);
                //await loadFull(engine);
                await loadSlim(engine);
                //await loadBasic(engine);
            }).then(() => {
                setInit(true);
            });
        }, []);



        return (
                 init && 
                 
                    <div className="w-[0px]">
                 
                 
                        <Particles
                            id="tsparticles"
                            
                            options={{
                            
                                fpsLimit: 120,
                                interactivity: {

                                    /* EVENTOS DE LAS PARTÍCULAS */
                                    events: {
                                        onClick: {
                                            enable: true,
                                            mode: "push",
                                        },
                                        onHover: {
                                            enable: true,
                                            mode: "repulse",
                                        },
                                        
                                    },

                                    /* COMPORTAMIENTO DE LAS PARTÍCULAS */
                                    modes: {
                                        push: {
                                            quantity: 4,
                                        },
                                        repulse: {
                                            distance: 200,
                                            duration: 0.4,
                                        },
                                    },
                                },

                                /* ASPECTOS DE LAS PARTÍCULAS */
                                particles: {
                                    color: {
                                        value: "#ffffff",
                                    },
                                    links: {
                                        color: "#ffffff",
                                        distance: 150,
                                        enable: true,
                                        opacity: 0.5,
                                        width: 1,
                                    },

                                    /*MOVIMIENTO DE LAS PARTICULAS*/
                                    move: {
                                        direction: "none",
                                        enable: true,
                                        outModes: {
                                            default: "bounce",
                                        },
                                        random: false,
                                        speed: 1,
                                        straight: false,
                                    },

                                    /* CANTIDAD DE PARTICULAS */
                                    number: {
                                        density: {
                                            enable: true,
                                        },
                                        value: 80,
                                    },

                                    /* VISUALIZACIÓN DE LAS PARTÍCULAS */
                                    opacity: {
                                        value: 0.5,
                                    },

                                    /*FORMA EN LA QUE SE AGRUPAN LAS PARTÍCULAS */
                                    shape: {
                                        type: "circle",
                                    },
                                    
                                    /* TAMAÑO DE LOS CIRCULITOS*/
                                    size: {
                                        value: { min: 1, max: 5 },
                                    },
                                },
                                detectRetina: true,
                            }}
                        />

                    </div>
        
    );

}

export default CoverParticles;

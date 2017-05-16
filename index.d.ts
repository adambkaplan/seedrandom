// Type definitions for seedrandom 2.4.3
// Project: https://github.com/davidbau/seedrandom
// Definitions by: Adam Kaplan <http://adambkaplan.github.io>

declare global {
    interface Math {
        /*~ Math.seedrandom() returns a string */
        seedrandom(seed?: string, options?: seedrandom.Options): string;
    }
}

declare function seedrandom(seed?: string, options?: seedrandom.Options): seedrandom.Prng;

declare namespace seedrandom {
    
    /*~ Interface for a pseudo-random number generator */
    interface Prng {
        (): number;
        double(): number;
        int32(): number;
        quick(): number;
        state?(): any;
    }
    
    interface Options {
        /**
         * Add entropy to random number generator
         */
        entropy?: boolean;
        /**
         * Update the PRNG for Math.random
         */
        global?: boolean;
        state?: string;
        pass?: SeedCallback;
    }

    interface SeedCallback {
        (prng: Prng, seed: string, isMathCall?: boolean, state?: string): Prng;
    }
}

export = seedrandom;

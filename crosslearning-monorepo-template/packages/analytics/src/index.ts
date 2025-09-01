export function track(type: string, payload?: any){ if(typeof window!=='undefined') console.log('[analytics]', type, payload||{}); }

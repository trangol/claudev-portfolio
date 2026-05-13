/**
 * GET /api/projects[?phase=production|development|proof_of_concept]
 *
 * Función serverless Vercel — equivalente al endpoint Express del servidor.
 * Aplica los mismos principios de la arquitectura original:
 * - Single Responsibility: solo maneja la lista de proyectos
 * - Stateless: recrea el estado por invocación (datos en memoria, sin DB)
 */
const { projects } = require('./_data');

module.exports = function handler(req, res) {
  // CORS: permite sielco.cl y cualquier subdominio
  const allowedOrigins = [
    'https://sielco.cl',
    'https://claudev.sielco.cl',
    'https://www.sielco.cl',
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ success: false, message: 'Method not allowed' });

  try {
    const { phase } = req.query;
    const filtered = phase
      ? projects.filter(p => p.phase === phase)
      : projects;

    return res.status(200).json({
      success: true,
      data: filtered,
      count: filtered.length,
    });
  } catch (err) {
    console.error('[api/projects] Error:', err);
    return res.status(500).json({ success: false, message: 'Error retrieving projects' });
  }
};

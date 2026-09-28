import React, { useState } from 'react';

const CloudIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const ShieldIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LayersIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const DollarIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const BookCheckIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    <path d="m9 9.5 2 2 4-4" />
  </svg>
);

const CheckCircleIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const CpuIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </svg>
);

const CLOUD_CHARACTERISTICS_NIST = [
  {
    title: "1. Autoservicio bajo Demanda (On-demand Self-service)",
    tag: "NIST SP 800-145",
    desc: "El usuario aprovisiona capacidades de cómputo, almacenamiento y redes de manera unilateral y automática, sin requerir interacción humana con el proveedor."
  },
  {
    title: "2. Amplio Acceso a la Red (Broad Network Access)",
    tag: "Conectividad Global",
    desc: "Los recursos están disponibles a través de la red y se accede a ellos mediante mecanismos estándares desde cualquier dispositivo (laptops, servidores, smartphones)."
  },
  {
    title: "3. Agrupación Compartida de Recursos (Resource Pooling)",
    tag: "Multi-tenant",
    desc: "Los recursos del proveedor sirven a múltiples clientes compartiendo infraestructura física, asignando y reasignando dinámicamente según la demanda."
  },
  {
    title: "4. Rápida Elasticidad (Rapid Elasticity)",
    tag: "Escalabilidad Dinámica",
    desc: "Capacidad de escalar hacia arriba o hacia abajo en tiempo real según la carga de trabajo, dando la percepción de recursos ilimitados adquiribles en cualquier momento."
  },
  {
    title: "5. Servicio Medido (Measured Service)",
    tag: "Telemetría & Cobro",
    desc: "Los sistemas en la nube controlan y optimizan automáticamente el uso de recursos midiendo consumo de CPU, almacenamiento, ancho de banda y cuentas activas."
  }
];

const SERVICE_MODELS_DATA = [
  {
    id: "iaas",
    name: "IaaS",
    formalName: "Infraestructura como Servicio (Infrastructure as a Service)",
    target: "Administradores de Sistemas / Ingenieros Cloud & DevOps",
    summary: "Se proporciona acceso a infraestructura informática esencial: servidores virtuales o físicos, almacenamiento y redes. El cliente conserva el control sobre sistemas operativos, almacenamiento y aplicaciones implementadas.",
    clientScope: "Sistema Operativo, Parches de SO, Middleware, Runtime, Datos de Usuario, Aplicaciones y Seguridad de Redes Virtuales.",
    providerScope: "Datacenter físico, Sistemas de enfriamiento, Energía ininterrumpida, Racks de cómputo, Hipervisor y Virtualización de Hardware.",
    industryExamples: ["Azure Virtual Machines", "Amazon EC2", "Google Compute Engine"],
    analogy: "Arrendamiento de un terreno urbano listo: tú construyes la estructura, las habitaciones y gestionas la seguridad interna."
  },
  {
    id: "paas",
    name: "PaaS",
    formalName: "Plataforma como Servicio (Platform as a Service)",
    target: "Desarrolladores de Software / Equipos de Ingeniería de Datos",
    summary: "El proveedor entrega un entorno gestionado para desarrollar, probar y desplegar aplicaciones sin la complejidad de gestionar servidores, parches del sistema operativo ni balanceadores de carga.",
    clientScope: "Código fuente de las aplicaciones, Lógica de negocio y Configuración de Datos.",
    providerScope: "Aprovisionamiento de servidores, Parches y licencias del SO, Runtime del lenguaje (Node.js, .NET, Python), Datacenter y Redes subyacentes.",
    industryExamples: ["Azure App Services", "AWS Elastic Beanstalk", "Vercel", "Google App Engine"],
    analogy: "Alquiler de un departamento equipado: tú traes tus pertenencias y ropa de trabajo, pero la mantención del edificio y ascensores corre por la administración."
  },
  {
    id: "saas",
    name: "SaaS",
    formalName: "Software como Servicio (Software as a Service)",
    target: "Usuarios Finales / Organizaciones y Empresas",
    summary: "Producto final de software totalmente administrado y accesible a través de Internet (usualmente cliente web o aplicación móvil). Requiere nula administración técnica por parte del consumidor.",
    clientScope: "Gestión de identidades de usuario, contraseñas, privilegios de acceso y los datos corporativos que se almacenan.",
    providerScope: "Absolutamente todo el stack tecnológico: hardware, sistema operativo, código del software, parches, alta disponibilidad y base de datos.",
    industryExamples: ["Microsoft 365 (Word, Teams)", "Google Workspace", "Salesforce", "GitHub Enterprise"],
    analogy: "Servicio de transporte público o taxi: consumes el trayecto de punto A a punto B sin ocuparte del motor, gasolina ni mantenimiento del vehículo."
  }
];

const RESPONSIBILITY_MATRIX = [
  { domain: "Seguridad física de Datacenter & Servidores", onPrem: "Cliente", iaas: "Proveedor", paas: "Proveedor", saas: "Proveedor" },
  { domain: "Hardware y Redes Físicas del Host", onPrem: "Cliente", iaas: "Proveedor", paas: "Proveedor", saas: "Proveedor" },
  { domain: "Hipervisor y Capa de Virtualización", onPrem: "Cliente", iaas: "Proveedor", paas: "Proveedor", saas: "Proveedor" },
  { domain: "Sistema Operativo (Instalación & Parches)", onPrem: "Cliente", iaas: "Cliente", paas: "Proveedor", saas: "Proveedor" },
  { domain: "Controles de Red Virtual & Firewall Lógica", onPrem: "Cliente", iaas: "Cliente", paas: "Compartido", saas: "Proveedor" },
  { domain: "Runtime, Middleware y Bases de Datos Base", onPrem: "Cliente", iaas: "Cliente", paas: "Proveedor", saas: "Proveedor" },
  { domain: "Lógica y Despliegue de la Aplicación", onPrem: "Cliente", iaas: "Cliente", paas: "Cliente", saas: "Proveedor" },
  { domain: "Gestión de Identidades, Credenciales y Accesos", onPrem: "Cliente", iaas: "Cliente", paas: "Cliente", saas: "Cliente" },
  { domain: "Gobernanza, Datos Corporativos y Clasificación", onPrem: "Cliente", iaas: "Cliente", paas: "Cliente", saas: "Cliente" }
];

const EVALUATION_EXAMS = [
  {
    id: 1,
    question: "¿Cuál es la responsabilidad principal del CLIENTE al contratar una máquina virtual IaaS en Microsoft Azure o AWS?",
    options: [
      { label: "Mantenimiento físico de las memorias RAM y discos en el rack del datacenter.", correct: false },
      { label: "Actualización de parches de seguridad del Sistema Operativo y configuración de firewalls.", correct: true },
      { label: "Reparación del sistema de climatización y energía de reserva del datacenter.", correct: false },
      { label: "Ninguna; el proveedor asume el 100% de la responsabilidad técnica en IaaS.", correct: false }
    ],
    feedback: "En IaaS, el proveedor entrega el hardware y el hipervisor. El cliente es el administrador absoluto del Sistema Operativo (Windows/Linux) y debe parcharlo y protegerlo."
  },
  {
    id: 2,
    question: "En términos contables y financieros, ¿cuál es la diferencia crítica entre CapEx y OpEx en infraestructura?",
    options: [
      { label: "CapEx consiste en gastos recurrentes mensuales; OpEx es la compra inicial de inmuebles.", correct: false },
      { label: "CapEx inmoviliza capital inicial en activos físicos depreciables; OpEx corresponde a gastos operacionales por consumo flexible deducibles periódicamente.", correct: true },
      { label: "Ambos conceptos son técnicamente idénticos según las normas financieras internacionales.", correct: false },
      { label: "OpEx exige compromisos de compra obligatorios por más de 5 años.", correct: false }
    ],
    feedback: "CapEx (Capital Expenditure) requiere comprar servidores físicos por adelantado. OpEx (Operational Expenditure) permite pagar mes a mes por los servicios cloud realmente consumidos."
  },
  {
    id: 3,
    question: "En el modelo SaaS (Software as a Service) como Microsoft 365, ¿qué aspecto permanece SIEMPRE bajo estricta responsabilidad del cliente?",
    options: [
      { label: "El mantenimiento del servidor de base de datos.", correct: false },
      { label: "La infraestructura de fibra óptica transcontinental.", correct: false },
      { label: "El gobierno de datos, la gestión de identidades y la asignación de permisos de acceso a los usuarios.", correct: true },
      { label: "El código fuente del motor de procesamiento.", correct: false }
    ],
    feedback: "Regla fundamental de ciberseguridad cloud: La identidad y los datos confidenciales NUNCA se delegan al proveedor, incluso en SaaS."
  },
  {
    id: 4,
    question: "¿Qué característica esencial del Cloud descrita por el NIST permite responder a aumentos imprevistos de demanda de usuarios sin caídas del servicio?",
    options: [
      { label: "Elasticidad Rápida (Rapid Elasticity / Auto-scaling)", correct: true },
      { label: "Aprovisionamiento manual en sitio (On-Premises racking)", correct: false },
      { label: "Topología estática punto a punto", correct: false },
      { label: "Contrato fijo de ancho de banda local", correct: false }
    ],
    feedback: "La elasticidad rápida permite aprovisionar y desaprovisionar recursos de cómputo automáticamente en base a métricas de carga en tiempo real."
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('fundamentos');
  const [activeModel, setActiveModel] = useState('iaas');
  const [viewMode, setViewMode] = useState('tabs'); // 'tabs' o 'informe'
  
  // Simulador Financiero CapEx vs OpEx
  const [serverUnits, setServerUnits] = useState(4);
  const [horizonMonths, setHorizonMonths] = useState(24);
  const [includeDisasterRecovery, setIncludeDisasterRecovery] = useState(true);

  // Evaluador
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Cálculos financieros
  const serverUnitCost = 4200; // USD por servidor físico profesional rackeable
  const rackDatacenterSetup = 3500; // UPS, cableado, switch de red
  const monthlyMaintenancePerServer = 280; // Energía eléctrica, climatización, licencias, soporte
  const totalCapexInitial = (serverUnits * serverUnitCost) + rackDatacenterSetup;
  const totalCapexOperational = (serverUnits * monthlyMaintenancePerServer * horizonMonths);
  const totalCapex = totalCapexInitial + totalCapexOperational;

  const cloudMonthlyPerServer = includeDisasterRecovery ? 165 : 135;
  const totalOpex = serverUnits * cloudMonthlyPerServer * horizonMonths;
  const netSavings = Math.max(0, totalCapex - totalOpex);
  const savingsPct = Math.round((netSavings / totalCapex) * 100);

  const handleAnswerSelect = (questionId, optionIdx) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    EVALUATION_EXAMS.forEach(q => {
      const selected = userAnswers[q.id];
      if (selected !== undefined && q.options[selected]?.correct) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="formal-cloud-portal">
      {/* Estilos CSS autónomos e integrados */}
      <style>{`
        .formal-cloud-portal {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          background-color: #0b1120;
          color: #e2e8f0;
          min-height: 100vh;
          line-height: 1.55;
          margin: 0;
          padding: 0;
          width: 100%;
          box-sizing: border-box;
          text-align: left;
        }
        .formal-cloud-portal * {
          box-sizing: border-box;
        }

        /* Barra de Encabezado Institucional */
        .portal-header {
          background-color: #0f172a;
          border-bottom: 1px solid #1e293b;
          padding: 0 1.5rem;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .portal-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .header-brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .brand-badge {
          background-color: #1e3a8a;
          color: #93c5fd;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          letter-spacing: 0.05em;
          border: 1px solid #2563eb40;
        }
        .brand-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .brand-subtitle {
          font-size: 0.75rem;
          color: #94a3b8;
          margin: 0;
        }

        /* Barra de Herramientas y Modos */
        .portal-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .btn-mode-toggle {
          background-color: #1e293b;
          border: 1px solid #334155;
          color: #cbd5e1;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.4rem 0.85rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-mode-toggle:hover {
          background-color: #334155;
          color: #ffffff;
        }
        .btn-mode-toggle.active {
          background-color: #2563eb;
          border-color: #3b82f6;
          color: #ffffff;
        }

        /* Banner Hero Ejecutivo */
        .portal-hero {
          background: linear-gradient(180deg, #0f172a 0%, #0b1120 100%);
          border-bottom: 1px solid #1e293b;
          padding: 2.75rem 1.5rem 2rem 1.5rem;
        }
        .portal-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-meta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #38bdf8;
          margin-bottom: 0.75rem;
        }
        .hero-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin: 0 0 0.85rem 0;
          line-height: 1.2;
        }
        .hero-lead {
          font-size: 0.98rem;
          color: #94a3b8;
          max-width: 820px;
          margin: 0 0 1.75rem 0;
          line-height: 1.6;
        }

        /* Pestañas de Navegación Formal */
        .nav-tabs-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .nav-tab-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #111827;
          border: 1px solid #1f293d;
          color: #94a3b8;
          padding: 0.55rem 1rem;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nav-tab-item:hover {
          color: #f8fafc;
          border-color: #334155;
          background-color: #172236;
        }
        .nav-tab-item.active {
          background-color: #1e3a8a;
          border-color: #3b82f6;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        }

        /* Contenedor Principal */
        .portal-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.25rem 1.5rem 4rem 1.5rem;
        }

        /* Tarjetas Corporativas */
        .card-panel {
          background-color: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 10px;
          padding: 1.75rem;
          margin-bottom: 2rem;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }
        .card-header-formal {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 1px solid #1e293b;
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .card-description {
          font-size: 0.84rem;
          color: #94a3b8;
          margin-top: 0.25rem;
        }

        /* Grid de 5 Pilares NIST */
        .nist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          margin-top: 1.25rem;
        }
        .nist-card {
          background-color: #111827;
          border: 1px solid #1e293b;
          border-radius: 8px;
          padding: 1.15rem;
          border-left: 3px solid #2563eb;
        }
        .nist-badge {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 700;
          color: #38bdf8;
          background-color: #0369a120;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }
        .nist-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: #f1f5f9;
          margin: 0 0 0.4rem 0;
        }
        .nist-text {
          font-size: 0.8rem;
          color: #94a3b8;
          line-height: 1.5;
          margin: 0;
        }

        /* Sub-pestañas de Modelos IaaS / PaaS / SaaS */
        .subnav-models {
          display: flex;
          gap: 0.5rem;
          background-color: #0b1120;
          padding: 0.35rem;
          border-radius: 8px;
          border: 1px solid #1e293b;
          margin-bottom: 1.5rem;
          width: fit-content;
        }
        .subnav-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.45rem 1.1rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .subnav-btn:hover {
          color: #ffffff;
        }
        .subnav-btn.active {
          background-color: #1e3a8a;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(30, 58, 138, 0.4);
        }

        /* Detalle del Modelo de Servicio */
        .model-spec-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 860px) {
          .model-spec-grid {
            grid-template-columns: 1fr;
          }
        }
        .spec-box {
          background-color: #111827;
          border: 1px solid #1e293b;
          border-radius: 8px;
          padding: 1.35rem;
        }
        .spec-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.4rem;
        }
        .spec-value {
          font-size: 0.88rem;
          color: #e2e8f0;
          line-height: 1.55;
          margin: 0 0 1.25rem 0;
        }
        .analogy-callout {
          background-color: #17255420;
          border-left: 3px solid #3b82f6;
          padding: 0.85rem 1rem;
          border-radius: 4px;
          font-size: 0.82rem;
          color: #bfdbfe;
          font-style: italic;
          margin-top: 1rem;
        }

        /* Tabla Ejecutiva de Responsabilidad Compartida */
        .table-responsive {
          width: 100%;
          overflow-x: auto;
          border: 1px solid #1e293b;
          border-radius: 8px;
          background-color: #111827;
        }
        .matrix-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.82rem;
          text-align: left;
        }
        .matrix-table th {
          background-color: #0b1120;
          color: #cbd5e1;
          font-weight: 700;
          padding: 0.85rem 1rem;
          border-bottom: 1px solid #1e293b;
          text-transform: uppercase;
          font-size: 0.72rem;
          letter-spacing: 0.04em;
        }
        .matrix-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid #1e293b70;
          color: #e2e8f0;
        }
        .matrix-table tr:last-child td {
          border-bottom: none;
        }
        .matrix-table tr:hover td {
          background-color: #172236;
        }
        .badge-resp-client {
          background-color: #1e3a8a30;
          color: #60a5fa;
          border: 1px solid #2563eb50;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.72rem;
        }
        .badge-resp-provider {
          background-color: #064e3b30;
          color: #34d399;
          border: 1px solid #05966950;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.72rem;
        }
        .badge-resp-shared {
          background-color: #78350f30;
          color: #fbbf24;
          border: 1px solid #d9770650;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.72rem;
        }

        /* Simulador CapEx vs OpEx */
        .simulator-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        @media (max-width: 800px) {
          .simulator-grid {
            grid-template-columns: 1fr;
          }
        }
        .control-group {
          background-color: #111827;
          border: 1px solid #1e293b;
          border-radius: 8px;
          padding: 1.25rem;
        }
        .slider-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 0.6rem;
        }
        .slider-input {
          width: 100%;
          cursor: pointer;
        }
        .metrics-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .metric-card {
          background-color: #111827;
          border: 1px solid #1e293b;
          border-radius: 8px;
          padding: 1.25rem;
          text-align: center;
        }
        .metric-card.highlight {
          background-color: #064e3b20;
          border-color: #05966960;
        }
        .metric-title {
          font-size: 0.74rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.4rem;
        }
        .metric-number {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          font-family: monospace;
        }
        .metric-number.green {
          color: #34d399;
        }
        .metric-number.amber {
          color: #fbbf24;
        }
        .metric-note {
          font-size: 0.72rem;
          color: #64748b;
          margin-top: 0.35rem;
        }

        /* Examen / Quiz */
        .quiz-item {
          background-color: #111827;
          border: 1px solid #1e293b;
          border-radius: 8px;
          padding: 1.35rem;
          margin-bottom: 1.25rem;
        }
        .quiz-question {
          font-size: 0.92rem;
          font-weight: 700;
          color: #f8fafc;
          margin: 0 0 1rem 0;
        }
        .quiz-option-btn {
          width: 100%;
          text-align: left;
          background-color: #0b1120;
          border: 1px solid #1e293b;
          color: #cbd5e1;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          font-size: 0.82rem;
          margin-bottom: 0.5rem;
          cursor: pointer;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .quiz-option-btn:hover {
          border-color: #3b82f6;
          background-color: #172236;
        }
        .quiz-option-btn.selected {
          border-color: #2563eb;
          background-color: #1e3a8a30;
          color: #93c5fd;
        }
        .quiz-option-btn.correct {
          border-color: #059669;
          background-color: #064e3b30;
          color: #6ee7b7;
        }
        .quiz-option-btn.incorrect {
          border-color: #dc2626;
          background-color: #7f1d1d30;
          color: #fca5a5;
        }
        .quiz-feedback {
          margin-top: 0.75rem;
          padding: 0.75rem;
          border-radius: 6px;
          background-color: #0f172a;
          border-left: 3px solid #3b82f6;
          font-size: 0.78rem;
          color: #cbd5e1;
        }

        /* Botón de Acción Principal */
        .btn-action-primary {
          background-color: #2563eb;
          color: #ffffff;
          border: none;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.65rem 1.4rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .btn-action-primary:hover {
          background-color: #1d4ed8;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
        }

        /* Footer Institucional */
        .portal-footer {
          border-top: 1px solid #1e293b;
          background-color: #0f172a;
          padding: 1.5rem;
          text-align: center;
          font-size: 0.75rem;
          color: #64748b;
        }
      `}</style>

      {/* HEADER INSTITUCIONAL */}
      <header className="portal-header">
        <div className="portal-header-inner">
          <div className="header-brand">
            <CloudIcon size={24} color="#38bdf8" />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h1 className="brand-title">Cloud Technical Center</h1>
                <span className="brand-badge">TI3062 &bull; GSI</span>
              </div>
              <p className="brand-subtitle">Arquitectura de Servidores, Modelos XaaS y Responsabilidad Compartida</p>
            </div>
          </div>

          <div className="portal-actions">
            <button
              onClick={() => setViewMode(viewMode === 'tabs' ? 'informe' : 'tabs')}
              className={`btn-mode-toggle ${viewMode === 'informe' ? 'active' : ''}`}
              title="Cambiar entre navegación por pestañas y documento continuo"
            >
              {viewMode === 'tabs' ? '📄 Ver en Modo Informe Continuo' : '📑 Ver Modo Pestañas'}
            </button>
          </div>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="portal-hero">
        <div className="portal-hero-inner">
          <div className="hero-meta">
            <CpuIcon size={14} color="#38bdf8" />
            <span>Documento Técnico Oficial de Formación Cloud</span>
          </div>
          <h2 className="hero-title">Fundamentos y Arquitectura de la Computación en la Nube</h2>
          <p className="hero-lead">
            Análisis formal basado en los estándares <strong>NIST SP 800-145</strong> e <strong>ISO/IEC 17788</strong>: definición formal de nube, delimitación de responsabilidades contractuales, modelos de servicio (IaaS, PaaS, SaaS) y evaluación financiera TCO (CapEx vs OpEx).
          </p>

          {/* Menú de pestañas */}
          {viewMode === 'tabs' && (
            <nav className="nav-tabs-wrapper">
              {[
                { id: 'fundamentos', label: '1. Definición & Pilares NIST', icon: CloudIcon },
                { id: 'modelos', label: '2. Modelos IaaS / PaaS / SaaS', icon: LayersIcon },
                { id: 'responsabilidad', label: '3. Responsabilidad Compartida', icon: ShieldIcon },
                { id: 'financiero', label: '4. TCO: CapEx vs OpEx', icon: DollarIcon },
                { id: 'evaluacion', label: '5. Evaluación Formativa', icon: BookCheckIcon }
              ].map(tab => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`nav-tab-item ${isSelected ? 'active' : ''}`}
                  >
                    <Icon size={16} color={isSelected ? '#ffffff' : '#94a3b8'} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="portal-main">

        {/* SECCIÓN 1: FUNDAMENTOS & NIST */}
        {(viewMode === 'informe' || activeTab === 'fundamentos') && (
          <section className="card-panel">
            <div className="card-header-formal">
              <div>
                <h3 className="card-title">
                  <CloudIcon size={20} color="#38bdf8" />
                  1. Definición Formal y las 5 Características Esenciales (NIST)
                </h3>
                <p className="card-description">
                  Definición formal según el <em>National Institute of Standards and Technology</em> (NIST SP 800-145).
                </p>
              </div>
              <span className="brand-badge">Estándar Internacional</span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              <strong>Definición:</strong> La computación en la nube es un modelo que permite el acceso omnipresente, conveniente y bajo demanda a través de la red a un grupo compartido de recursos computacionales configurables (por ejemplo, redes, servidores, almacenamiento, aplicaciones y servicios) que pueden aprovisionarse y liberarse rápidamente con un esfuerzo de gestión mínimo o interacción con el proveedor de servicios.
            </p>

            <div className="nist-grid">
              {CLOUD_CHARACTERISTICS_NIST.map((item, idx) => (
                <div key={idx} className="nist-card">
                  <span className="nist-badge">{item.tag}</span>
                  <h4 className="nist-title">{item.title}</h4>
                  <p className="nist-text">{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.75rem', padding: '1.25rem', backgroundColor: '#111827', borderRadius: '8px', border: '1px solid #1e293b' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                Tipologías de Despliegue (Deployment Models)
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '0.75rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                <div>
                  <strong style={{ color: '#38bdf8' }}>Nube Pública:</strong> Infraestructura abierta al público general operada por hiperescaladores (Microsoft Azure, AWS, GCP).
                </div>
                <div>
                  <strong style={{ color: '#a78bfa' }}>Nube Privada:</strong> Infraestructura dedicada para uso exclusivo de una sola organización con múltiples divisiones.
                </div>
                <div>
                  <strong style={{ color: '#34d399' }}>Nube Híbrida:</strong> Composición de nubes públicas y privadas unidas por tecnología estandarizada que permite portabilidad de datos y apps.
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECCIÓN 2: MODELOS DE SERVICIO (IaaS, PaaS, SaaS) */}
        {(viewMode === 'informe' || activeTab === 'modelos') && (
          <section className="card-panel">
            <div className="card-header-formal">
              <div>
                <h3 className="card-title">
                  <LayersIcon size={20} color="#38bdf8" />
                  2. Taxonomía de Modelos de Servicio: IaaS, PaaS y SaaS
                </h3>
                <p className="card-description">
                  Clasificación del stack tecnológico según el grado de abstracción y control operacional.
                </p>
              </div>
            </div>

            {/* Selector de Modelo */}
            <div className="subnav-models">
              {SERVICE_MODELS_DATA.map(m => (
                <button
                  key={m.id}
                  onClick={() => setActiveModel(m.id)}
                  className={`subnav-btn ${activeModel === m.id ? 'active' : ''}`}
                >
                  {m.name}
                </button>
              ))}
            </div>

            {(() => {
              const selected = SERVICE_MODELS_DATA.find(m => m.id === activeModel);
              return (
                <div className="model-spec-grid">
                  <div className="spec-box">
                    <div className="spec-label">Modelo Seleccionado</div>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', color: '#ffffff', fontWeight: 800 }}>
                      {selected.formalName}
                    </h4>
                    <p className="spec-value">{selected.summary}</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                      <div style={{ background: '#0b1120', padding: '0.85rem', borderRadius: '6px', border: '1px solid #1e293b' }}>
                        <span style={{ fontSize: '0.72rem', color: '#60a5fa', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                          RESPONSABILIDAD DEL CLIENTE
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>{selected.clientScope}</span>
                      </div>
                      <div style={{ background: '#0b1120', padding: '0.85rem', borderRadius: '6px', border: '1px solid #1e293b' }}>
                        <span style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                          GESTIONADO POR EL PROVEEDOR
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>{selected.providerScope}</span>
                      </div>
                    </div>

                    <div className="analogy-callout">
                      <strong>Analogía práctica:</strong> {selected.analogy}
                    </div>
                  </div>

                  <div className="spec-box" style={{ display: 'flex', flexDirection: 'col', justifyContent: 'space-between' }}>
                    <div>
                      <div className="spec-label">Perfil de Usuario Objetivo</div>
                      <p style={{ fontSize: '0.84rem', color: '#f1f5f9', fontWeight: 600, marginBottom: '1.25rem' }}>
                        {selected.target}
                      </p>

                      <div className="spec-label">Ejemplos de Mercado</div>
                      <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.8 }}>
                        {selected.industryExamples.map((ex, i) => (
                          <li key={i}><strong style={{ color: '#e2e8f0' }}>{ex}</strong></li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: '1.5rem', padding: '0.75rem', backgroundColor: '#0b1120', borderRadius: '6px', border: '1px solid #1e293b', fontSize: '0.74rem', color: '#64748b' }}>
                      Nivel de control técnico: <span style={{ color: '#ffffff', fontWeight: 700 }}>{selected.id === 'iaas' ? 'Máximo' : selected.id === 'paas' ? 'Equilibrado' : 'Consumo'}</span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </section>
        )}

        {/* SECCIÓN 3: RESPONSABILIDAD COMPARTIDA */}
        {(viewMode === 'informe' || activeTab === 'responsabilidad') && (
          <section className="card-panel">
            <div className="card-header-formal">
              <div>
                <h3 className="card-title">
                  <ShieldIcon size={20} color="#38bdf8" />
                  3. Matriz Contractual de Responsabilidad Compartida
                </h3>
                <p className="card-description">
                  Delimitación legal y técnica de obligaciones entre el suscriptor y el Cloud Service Provider (CSP).
                </p>
              </div>
              <span className="brand-badge" style={{ backgroundColor: '#78350f30', color: '#fbbf24', borderColor: '#d9770650' }}>
                Auditoría & Compliance
              </span>
            </div>

            <p style={{ fontSize: '0.86rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
              La seguridad en la nube opera bajo un principio bipartito: el proveedor es responsable de la <strong>seguridad DE la nube</strong> (infraestructura física, datacenters e hipervisores), mientras que la organización es responsable de la <strong>seguridad EN la nube</strong> (datos, credenciales, accesos y configuraciones de red).
            </p>

            <div className="table-responsive">
              <table className="matrix-table">
                <thead>
                  <tr>
                    <th>Dominio Técnico / Capa de Seguridad</th>
                    <th style={{ textAlign: 'center' }}>On-Premises</th>
                    <th style={{ textAlign: 'center' }}>IaaS</th>
                    <th style={{ textAlign: 'center' }}>PaaS</th>
                    <th style={{ textAlign: 'center' }}>SaaS</th>
                  </tr>
                </thead>
                <tbody>
                  {RESPONSIBILITY_MATRIX.map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600 }}>{row.domain}</td>
                      <td style={{ textAlign: 'center' }}>
                        <span className="badge-resp-client">{row.onPrem}</span>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <span className={row.iaas === 'Cliente' ? 'badge-resp-client' : 'badge-resp-provider'}>
                          {row.iaas}
                        </span>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <span className={row.paas === 'Cliente' ? 'badge-resp-client' : row.paas === 'Compartido' ? 'badge-resp-shared' : 'badge-resp-provider'}>
                          {row.paas}
                        </span>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <span className={row.saas === 'Cliente' ? 'badge-resp-client' : 'badge-resp-provider'}>
                          {row.saas}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '1.25rem', padding: '0.85rem 1rem', background: '#1e1b4b20', borderLeft: '3px solid #818cf8', borderRadius: '4px', fontSize: '0.8rem', color: '#c7d2fe' }}>
              <strong>Principio no negociable de certificación (Azure AZ-900 / AWS CP):</strong> Sin importar si se utiliza IaaS, PaaS o SaaS, <strong>la información confidencial, las cuentas corporativas y las identidades permanecen bajo la responsabilidad directa y exclusiva del cliente</strong>.
            </div>
          </section>
        )}

        {/* SECCIÓN 4: CAPEX VS OPEX */}
        {(viewMode === 'informe' || activeTab === 'financiero') && (
          <section className="card-panel">
            <div className="card-header-formal">
              <div>
                <h3 className="card-title">
                  <DollarIcon size={20} color="#38bdf8" />
                  4. Evaluación de Costo Total de Propiedad (TCO): CapEx vs OpEx
                </h3>
                <p className="card-description">
                  Modelamiento económico del gasto de capital frente a gastos operativos en nube.
                </p>
              </div>
            </div>

            <div className="simulator-grid">
              <div className="control-group">
                <div className="slider-label">
                  <span>Capacidad de Cómputo Requerida:</span>
                  <span style={{ color: '#38bdf8', fontFamily: 'monospace' }}>{serverUnits} Servidores Rack</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={serverUnits}
                  onChange={(e) => setServerUnits(Number(e.target.value))}
                  className="slider-input"
                />
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Simula entre 1 y 20 nodos dedicados de alta disponibilidad.</span>
              </div>

              <div className="control-group">
                <div className="slider-label">
                  <span>Horizonte Temporal de Operación:</span>
                  <span style={{ color: '#34d399', fontFamily: 'monospace' }}>{horizonMonths} Meses ({Math.round(horizonMonths / 12 * 10) / 10} Años)</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="48"
                  step="6"
                  value={horizonMonths}
                  onChange={(e) => setHorizonMonths(Number(e.target.value))}
                  className="slider-input"
                />
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Ventana de amortización del hardware y contratos.</span>
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={includeDisasterRecovery}
                  onChange={(e) => setIncludeDisasterRecovery(e.target.checked)}
                />
                Incluir replicación geográfica y recuperación ante desastres (Disaster Recovery SLA 99.99%)
              </label>
            </div>

            <div className="metrics-row">
              <div className="metric-card">
                <div className="metric-title">CapEx Total (On-Premises)</div>
                <div className="metric-number amber">${totalCapex.toLocaleString()} USD</div>
                <div className="metric-note">Hardware, UPS, refrigeración y mantenimiento</div>
              </div>

              <div className="metric-card">
                <div className="metric-title">OpEx Total (Cloud Computing)</div>
                <div className="metric-number">${totalOpex.toLocaleString()} USD</div>
                <div className="metric-note">$0 de inversión inicial en activos físicos</div>
              </div>

              <div className="metric-card highlight">
                <div className="metric-title" style={{ color: '#34d399' }}>Ahorro Financiero Estimado</div>
                <div className="metric-number green">~${netSavings.toLocaleString()} USD</div>
                <div className="metric-note">{savingsPct}% de reducción sobre el gasto de capital</div>
              </div>
            </div>
          </section>
        )}

        {/* SECCIÓN 5: EVALUACIÓN TÉCNICA FORMATIVA */}
        {(viewMode === 'informe' || activeTab === 'evaluacion') && (
          <section className="card-panel">
            <div className="card-header-formal">
              <div>
                <h3 className="card-title">
                  <BookCheckIcon size={20} color="#38bdf8" />
                  5. Evaluación Formativa de Conceptos Cloud
                </h3>
                <p className="card-description">
                  Comprobación formal de conocimientos orientada a evaluaciones técnicas y certificaciones.
                </p>
              </div>
              {quizSubmitted && (
                <span className="brand-badge" style={{ backgroundColor: '#064e3b30', color: '#34d399', borderColor: '#05966950' }}>
                  Calificación: {calculateScore()} / {EVALUATION_EXAMS.length} ({Math.round(calculateScore() / EVALUATION_EXAMS.length * 100)}%)
                </span>
              )}
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              {EVALUATION_EXAMS.map((q, qIndex) => {
                const selectedOpt = userAnswers[q.id];
                return (
                  <div key={q.id} className="quiz-item">
                    <p className="quiz-question">{qIndex + 1}. {q.question}</p>
                    
                    <div>
                      {q.options.map((opt, optIndex) => {
                        const isSelected = selectedOpt === optIndex;
                        let btnClass = "quiz-option-btn";
                        if (quizSubmitted) {
                          if (opt.correct) btnClass += " correct";
                          else if (isSelected) btnClass += " incorrect";
                        } else if (isSelected) {
                          btnClass += " selected";
                        }

                        return (
                          <button
                            key={optIndex}
                            onClick={() => handleAnswerSelect(q.id, optIndex)}
                            className={btnClass}
                          >
                            <span>{opt.label}</span>
                            {quizSubmitted && opt.correct && (
                              <CheckCircleIcon size={16} color="#34d399" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="quiz-feedback">
                        <strong style={{ color: '#38bdf8' }}>Fundamento técnico:</strong> {q.feedback}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setQuizSubmitted(true)}
                className="btn-action-primary"
              >
                Comprobar Respuestas
              </button>
              {quizSubmitted && (
                <button
                  onClick={() => {
                    setUserAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="btn-mode-toggle"
                >
                  Reiniciar Evaluación
                </button>
              )}
            </div>
          </section>
        )}

      </main>

      {/* FOOTER FORMAL */}
      <footer className="portal-footer">
        <p style={{ margin: 0 }}>
          Documento Técnico &bull; Laboratorio GSI TI3062 &bull; Implementado en React + Vite en la carpeta <code style={{ color: '#93c5fd' }}>proyecto_1</code>
        </p>
      </footer>
    </div>
  );
}
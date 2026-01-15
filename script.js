/**
 * TRAXIÓN - Sistema de Mantenimiento Preventivo
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Selectores ---
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotModal = document.getElementById('chatbot-modal');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotTooltip = document.getElementById('chatbot-tooltip');
    const tooltipClose = document.getElementById('tooltip-close');

    const reportForm = document.getElementById('formulario-reporte');
    const criticalAlert = document.getElementById('critical-alert');
    
    // Selectores para Cookies
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookiesBtn = document.getElementById("acceptCookies");
    const cookieKey = "cookiesAccepted";

    // IDs de los campos que pueden disparar una alerta de seguridad
    const criticalFields = ['nivel_aceite', 'presion_neumaticos', 'frenos_ok', 'liquido_frenos'];

    // --- 2. Lógica de Cookies ---
    
    const showOrHideBanner = () => {
        if (!cookieBanner) return;
        const accepted = localStorage.getItem(cookieKey);
        if (accepted === "yes") {
            cookieBanner.style.display = "none";
        } else {
            cookieBanner.style.display = "flex";
        }
    };

    // Evento para aceptar cookies
    acceptCookiesBtn?.addEventListener("click", () => {
        localStorage.setItem(cookieKey, "yes");
        showOrHideBanner();
    });

    // Ejecución inicial para verificar estado de cookies
    showOrHideBanner();

    // --- 3. Lógica del Tooltip y Asistente ---

    // Mostrar tooltip con un pequeño delay para llamar la atención
    setTimeout(() => {
        if (chatbotTooltip && !chatbotTooltip.classList.contains('hidden')) {
            chatbotTooltip.style.display = 'block';
        }
    }, 2000);

    // Cerrar tooltip
    tooltipClose?.addEventListener('click', (e) => {
        e.stopPropagation();
        chatbotTooltip.classList.add('hidden');
        chatbotTooltip.style.display = 'none';
    });

    // Abrir/Cerrar Chatbot (Toggle básico)
    chatbotToggle?.addEventListener('click', () => {
        chatbotModal.classList.toggle('hidden');
        chatbotTooltip?.classList.add('hidden');
        if (chatbotTooltip) chatbotTooltip.style.display = 'none';
    });

    chatbotClose?.addEventListener('click', () => {
        chatbotModal.classList.add('hidden');
    });

    // --- 4. Validación de Inspección Crítica ---

    const validateSecurity = () => {
        let isSafe = true;

        criticalFields.forEach(id => {
            const field = document.getElementById(id);
            if (!field) return;

            // Valores que consideramos peligrosos para la operación
            const dangerValues = ['critico', 'no', 'muy_baja', 'bajo'];
            
            if (dangerValues.includes(field.value)) {
                isSafe = false;
            }
        });

        // Mostrar u ocultar la alerta roja de advertencia
        if (!isSafe) {
            criticalAlert?.classList.remove('hidden');
        } else {
            criticalAlert?.classList.add('hidden');
        }
    };

    // Escuchar cambios en los campos críticos del formulario
    reportForm?.addEventListener('change', (e) => {
        if (criticalFields.includes(e.target.id)) {
            validateSecurity();
        }
    });

    // Manejo de envío del formulario, no se guarda en base de datos ni de otra manera en el prototipo
    reportForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const unidad = document.getElementById('unidad_id')?.value;
        console.log(`Reporte de unidad ${unidad} procesado localmente.`);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregar = document.querySelectorAll('.boton-agregar');
    const tarjetasProducto = document.querySelectorAll('.tarjeta-producto');
    
    // Funcionalidad para agregar productos
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const tarjeta = this.closest('.tarjeta-producto');
            const nombreProducto = tarjeta.querySelector('.nombre-producto').textContent;
            const precio = tarjeta.querySelector('.precio').textContent;
            
            // Animación del botón
            this.textContent = '✓ Agregado';
            this.style.background = '#40916c';
            
            // Mostrar notificación
            mostrarNotificacion(`${nombreProducto} agregado al carrito`);
            
            // Restaurar botón después de 2 segundos
            setTimeout(() => {
                this.textContent = 'Agregar';
                this.style.background = '#52b788';
            }, 2000);
            
            console.log('Producto agregado:', { nombre: nombreProducto, precio: precio });
        });
    });
    
    // Hover en tarjetas
    tarjetasProducto.forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', function() {
            this.style.borderColor = '#52b788';
        });
        
        tarjeta.addEventListener('mouseleave', function() {
            this.style.borderColor = 'transparent';
        });
    });
    
    // Función para mostrar notificaciones
    function mostrarNotificacion(mensaje) {
        // Crear elemento de notificación
        const notificacion = document.createElement('div');
        notificacion.className = 'notificacion';
        notificacion.textContent = mensaje;
        notificacion.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #52b788;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            animation: deslizarEntrada 0.3s ease;
        `;
        
        document.body.appendChild(notificacion);
        
        // Eliminar después de 3 segundos
        setTimeout(() => {
            notificacion.style.animation = 'deslizarSalida 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notificacion);
            }, 300);
        }, 3000);
    }
    
    // Agregar estilos de animación
    const estilos = document.createElement('style');
    estilos.textContent = `
        @keyframes deslizarEntrada {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes deslizarSalida {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(estilos);
});
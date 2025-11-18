
        // Efecto de escritura y borrado para el nombre
        const textElement = document.getElementById('dynamic-text');
        const texts = [
            "Levi Reyes",
            "Civil Engineer",
            "Bilingual",
            "My portfolio"

            
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        let deletingSpeed = 50;
        let pauseTime = 2000;
        
        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                // Borrando texto
                textElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = deletingSpeed;
            } else {
                // Escribiendo texto
                textElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            // Cambiar entre escribir y borrar
            if (!isDeleting && charIndex === currentText.length) {
                // Pausa al final del texto
                isDeleting = true;
                typingSpeed = pauseTime;
            } else if (isDeleting && charIndex === 0) {
                // Cambiar al siguiente texto
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            
            setTimeout(typeText, typingSpeed);
        }
        
        // Iniciar el efecto de escritura
        document.addEventListener('DOMContentLoaded', typeText);
        
        // Smooth scrolling para los enlaces de navegación
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            });
        });
    



document.addEventListener("DOMContentLoaded", function() {
    let carousel = document.querySelector('#projectCarousel');
    let bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 5000,  // Cambia cada 5 segundos
        ride: 'carousel'
    });
});



 // JavaScript para el menú hamburguesa
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar el menú al hacer clic en un enlace
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });






         // Datos de las habilidades
        const skillData = {
            // Habilidades técnicas actualizadas
            "Microsoft Excel": "Microsoft Excel is a powerful spreadsheet application used for data analysis, visualization, and complex calculations. I'm proficient in creating formulas, pivot tables, charts, and automating tasks to streamline data processing.",
            "Canva": "Canva is a user-friendly graphic design platform that I use to create professional-looking presentations, social media graphics, posters, and other visual content without needing advanced design skills.",
            "English": "I have advanced English language proficiency with strong communication skills in both written and spoken contexts, enabling effective collaboration in international environments and understanding technical documentation.",
            "HTML/CSS": "HTML provides the structure of web pages while CSS handles the visual presentation and layout. I create responsive, accessible websites using modern HTML5 and CSS3 techniques.",
            "Power BI": "Power BI is a business analytics tool that transforms data into interactive visualizations. I use it to create comprehensive reports and dashboards that help in data-driven decision making.",
            "Office 365": "Office 365 is a suite of productivity applications including Word, Excel, PowerPoint, and Outlook. I'm proficient in using these tools for document creation, data analysis, presentations, and communication.",
            "JavaScript": "JavaScript is a versatile programming language used for web development, enabling interactive and dynamic content on websites. I use it to create responsive user interfaces and implement complex functionality.",
            "Microsoft Word": "Microsoft Word is a word processing application that I use to create professional documents, reports, and formatted text content with advanced features like styles, templates, and collaboration tools.",
            "GitHub": "GitHub is a web-based platform for version control and collaboration that allows multiple developers to work on projects together. I use it to host code repositories, manage projects, and contribute to open-source software.",
            
            // Habilidades blandas actualizadas
            "Communication": "The ability to convey information clearly and effectively, both verbally and in writing, to different audiences.",
            "Teamwork": "Collaborating effectively with others to achieve common goals, respecting diverse perspectives and contributing to group success.",
            "Problem Solving": "Identifying challenges, analyzing root causes, and developing effective solutions through logical and creative thinking.",
            "Adaptability": "Adjusting to new conditions, learning new skills, and thriving in changing environments with resilience.",
            "Leadership": "Guiding, motivating, and influencing others toward achieving objectives while fostering a positive environment.",
            "Time Management": "Organizing and planning how to divide time between specific activities to work efficiently and meet deadlines.",
            "Creativity": "Generating innovative ideas, thinking outside the box, and approaching problems from unique perspectives.",
            "Critical Thinking": "Analyzing information objectively, evaluating different viewpoints, and making reasoned judgments based on evidence.",
            "Proactivity": "Taking initiative to anticipate needs, identify opportunities, and address potential issues before they arise without waiting for instructions."
        };

        // Elementos del DOM
        const skillItems = document.querySelectorAll('.skill-item');
        const modal = document.getElementById('skillModal');
        const modalTitle = document.getElementById('modalSkillTitle');
        const modalDescription = document.getElementById('modalSkillDescription');
        const closeModal = document.querySelector('.close-modal');

        // Abrir modal al hacer clic en una habilidad
        skillItems.forEach(item => {
            item.addEventListener('click', () => {
                const skillName = item.getAttribute('data-skill');
                modalTitle.textContent = skillName;
                modalDescription.textContent = skillData[skillName];
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevenir scroll
            });
        });

        // Cerrar modal
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restaurar scroll
        });

        // Cerrar modal al hacer clic fuera del contenido
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });







                // Simulación de descarga de CV
        document.getElementById('downloadCv').addEventListener('click', function(e) {
            e.preventDefault();
            
            const btn = this;
            const originalText = btn.innerHTML;
            
            // Añadir clase de animación
            btn.classList.add('downloading');
            btn.innerHTML = '<i class="fas fa-download"></i> Downloading...';
            
            // Simular tiempo de descarga
            setTimeout(() => {
                // Crear un enlace de descarga simulado
                const link = document.createElement('a');
                // Reemplaza 'tu-cv.pdf' con la ruta real de tu CV
                link.href = 'LeviRuben-CV.pdf'; 
                link.download = 'LeviRuben-CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Restaurar el botón
                btn.classList.remove('downloading');
                btn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
                
                // Volver al estado original después de 2 segundos
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
                
            }, 1500);
            
        });




        

         document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const messageStatus = document.getElementById('messageStatus');
            
            // Cambiar el texto del botón a "Enviando..."
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Obtener los datos del formulario
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Usar EmailJS para enviar el correo
            emailjs.send('service_yfbzaor', 'template_abr0hk7', data)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    messageStatus.textContent = 'Message sent successfully! I will contact you soon.';
                    messageStatus.className = 'message-status success';
                    messageStatus.style.display = 'block';
                    
                    // Limpiar el formulario
                    document.getElementById('contactForm').reset();
                    
                    // Ocultar el mensaje después de 5 segundos
                    setTimeout(() => {
                        messageStatus.style.display = 'none';
                    }, 5000);
                }, function(error) {
                    console.log('FAILED...', error);
                    messageStatus.textContent = 'Error sending message. Please try again later or contact me directly.';
                    messageStatus.className = 'message-status error';
                    messageStatus.style.display = 'block';
                    
                    // Ocultar el mensaje después de 5 segundos
                    setTimeout(() => {
                        messageStatus.style.display = 'none';
                    }, 5000);
                })
                .finally(() => {
                    // Restaurar el botón
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send it';
                    submitBtn.disabled = false;
                });
        });

        // Inicializar EmailJS con tu User ID
        // Reemplaza 'YOUR_PUBLIC_KEY' con tu clave pública de EmailJS
        (function() {
            emailjs.init("XseXVbjEwNrnwEja4");
        })();



                // Add scroll animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all elements for animation
        document.querySelectorAll('.step, .skill-card').forEach(el => {
            observer.observe(el);
        });

        // Add hover effects dynamically
        document.querySelectorAll('.step').forEach(step => {
            step.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px)';
            });
            
            step.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });




     
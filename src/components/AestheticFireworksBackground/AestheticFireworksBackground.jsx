import React, { useEffect, useRef } from 'react';
import './AestheticFireworksBackground.css';

const AestheticFireworksBackground = () => {
  const canvasRef = useRef(null);
  const fireworksRef = useRef([]);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Firework class
    class Firework {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.targetY = Math.random() * canvas.height * 0.5;
        this.speed = Math.random() * 2 + 3;
        this.hue = Math.random() * 60 + 15; // Gold/orange tones
        this.exploded = false;
        this.trail = [];
      }

      update() {
        if (!this.exploded) {
          // Add to trail
          this.trail.push({ x: this.x, y: this.y });
          if (this.trail.length > 8) {
            this.trail.shift();
          }

          this.y -= this.speed;
          if (this.y <= this.targetY) {
            this.explode();
          }
        }
      }

      explode() {
        this.exploded = true;
        // Create particles with beautiful colors
        const colors = [
          `hsl(${this.hue}, 100%, 60%)`,
          `hsl(${this.hue + 20}, 100%, 70%)`,
          `hsl(${this.hue - 10}, 100%, 65%)`,
          'rgba(255, 255, 255, 0.9)'
        ];

        for (let i = 0; i < 25; i++) { // Reduced from 30 to 25
          particlesRef.current.push(
            new Particle(this.x, this.y, colors[i % colors.length])
          );
        }
      }

      draw(ctx) {
        if (!this.exploded) {
          // Draw trail
          ctx.globalCompositeOperation = 'lighter';
          this.trail.forEach((point, index) => {
            ctx.globalAlpha = index / this.trail.length;
            ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
            ctx.beginPath();
            ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
            ctx.fill();
          });

          // Draw firework
          ctx.globalAlpha = 1;
          ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
          ctx.fill();
          
          // Add glow effect
          ctx.shadowBlur = 10;
          ctx.shadowColor = `hsl(${this.hue}, 100%, 70%)`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    // Particle class for explosion effects
    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = (Math.random() - 0.5) * 8;
        this.color = color;
        this.life = 100;
        this.decay = Math.random() * 1.5 + 0.5;
        this.size = Math.random() * 3 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.08; // Gravity
        this.vx *= 0.98; // Air resistance
        this.life -= this.decay;
        this.size *= 0.99;
      }

      draw(ctx) {
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = this.life / 100;
        ctx.fillStyle = this.color;
        
        // Add glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
      }
    }

    // Only 3 floating dots instead of 6
    const floatingDots = [];
    for (let i = 0; i < 3; i++) {
      floatingDots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      // Create subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(26, 26, 62, 0.15)');
      gradient.addColorStop(0.5, 'rgba(45, 27, 105, 0.1)');
      gradient.addColorStop(1, 'rgba(60, 42, 138, 0.15)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create fireworks occasionally (reduced frequency)
      if (Math.random() < 0.008) { // Reduced from 0.02 to 0.008
        fireworksRef.current.push(
          new Firework(
            Math.random() * canvas.width,
            canvas.height
          )
        );
      }

      // Update and draw fireworks
      fireworksRef.current = fireworksRef.current.filter(firework => {
        firework.update();
        firework.draw(ctx);
        return !firework.exploded;
      });

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.update();
        particle.draw(ctx);
        return particle.life > 0;
      });

      // Update and draw floating dots (reduced count)
      floatingDots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x > canvas.width) dot.x = 0;
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.y > canvas.height) dot.y = 0;
        if (dot.y < 0) dot.y = canvas.height;

        // Gentle opacity pulse
        dot.opacity = 0.3 + Math.sin(Date.now() * 0.003 + dot.x * 0.01) * 0.2;

        ctx.globalAlpha = dot.opacity;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="aesthetic-fireworks-container">
      <div className="gradient-background"></div>
      <canvas 
        ref={canvasRef}
        className="fireworks-canvas"
      />
      <div className="subtle-orb"></div>
    </div>
  );
};

export default AestheticFireworksBackground;

import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for contact form
  app.post("/api/contact", (req: Request, res: Response) => {
    const formData = req.body;
    
    // In a real production environment, you would use nodemailer or a service like SendGrid here.
    // For now, we simulate the success as we are in a dev environment.
    console.log("Received contact form submission:", formData);
    
    // Simulate processing time
    setTimeout(() => {
      res.json({ 
        success: true, 
        message: "Tak! Din besked er sendt. Vi vender tilbage snarest muligt. Hav en dejlig dag!" 
      });
    }, 1000);
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

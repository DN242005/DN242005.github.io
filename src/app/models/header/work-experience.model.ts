export interface WorkExperience {
  id?: string;
  startDate: string;
  endDate: string;
  position: string;  // Esto lo usaremos para el título de la posición
  company: string;
  location: string;
  fullStack: string;  // Aquí guardamos información sobre las tecnologías
  accomplishments: string;
}

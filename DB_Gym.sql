create schema api_general;
use api_general;
SET time_zone = '-05:00';

CREATE TABLE  states (
    id_state INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(50) NOT NULL
);


CREATE TABLE users (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    state_id INT,
    FOREIGN KEY (state_id) REFERENCES states(id_state) ON DELETE SET NULL
);


CREATE TABLE categories (
    id_category INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    description VARCHAR(500)
);

CREATE TABLE exercises (
    id_exercise INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(500),
    sets INT NOT NULL,
    repetitions INT NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id_category) ON DELETE CASCADE
);

CREATE TABLE users_exercise (
    user_id INT,
    exercise_id INT,
    date DATE,
    notes TEXT,
    PRIMARY KEY (user_id, exercise_id),
    FOREIGN KEY (user_id) REFERENCES users(id_user),
    FOREIGN KEY (exercise_id) REFERENCES exercises(id_exercise)
);


INSERT INTO states (description) VALUES
('Activo'),
('Inactivo'),
('Suspendido');


INSERT INTO users (first_name, last_name, username, email, phone, password, state_id) VALUES
('John', 'Doe', 'johndoe', 'johndoe@example.com', '1234567890', 'password123', 1),
('Jane', 'Smith', 'janesmith', 'janesmith@example.com', '9876543210', 'password456', 1);


INSERT INTO categories (name, description) VALUES
('Pierna', 'Ejercicios para fortalecer piernas'),
('Pecho', 'Ejercicios para desarrollar el pecho'),
('Espalda', 'Ejercicios para la espalda'),
('Brazos', 'Ejercicios para bíceps y tríceps'),
('Hombros', 'Ejercicios para los hombros'),
('Abdomen', 'Ejercicios para el core');


INSERT INTO exercises (name, description, sets, repetitions, category_id) VALUES
('Sentadillas', 'Ejercicio de pierna con barra', 4, 12, 1),
('Prensa de Piernas', 'Ejercicio de fuerza para piernas', 4, 10, 1),
('Peso Muerto Rumano', 'Ejercicio para femorales y glúteos', 4, 10, 1),
('Press de Banca', 'Ejercicio compuesto para pecho', 4, 10, 2),
('Aperturas con Mancuernas', 'Trabaja la parte externa del pecho', 3, 12, 2),
('Fondos en Paralelas', 'Fortalece pectorales y tríceps', 3, 10, 2),
('Dominadas', 'Fortalece espalda y brazos', 4, 8, 3),
('Remo con Barra', 'Ejercicio clave para dorsales', 4, 10, 3),
('Pull Over', 'Apertura de dorsales y pecho', 3, 12, 3),
('Curl de Bíceps', 'Aísla los bíceps', 3, 12, 4),
('Extensión de Tríceps', 'Ejercicio para tríceps', 3, 12, 4),
('Martillo con Mancuernas', 'Desarrolla el braquial', 3, 12, 4),
('Elevaciones Laterales', 'Trabaja deltoides lateral', 3, 15, 5),
('Press Militar', 'Ejercicio compuesto para hombros', 4, 10, 5),
('Face Pull', 'Fortalece la parte posterior del hombro', 3, 12, 5),
('Plancha', 'Fortalece el core y abdomen', 3, 60, 6),
('Crunch en Máquina', 'Ejercicio básico de abdomen', 3, 15, 6),
('Elevación de Piernas', 'Trabaja el abdomen inferior', 3, 12, 6);


INSERT INTO users_exercise (user_id, exercise_id) VALUES
(5, 1),  -- John Doe hace Sentadillas 
(5, 4),  -- John Doe hace Press de Banca 
(6, 2),  -- Jane Smith hace Prensa de Piernas 
(6, 5);  -- Jane Smith hace Aperturas con Mancuernas


-- Actividad de clase 
-- 1) users → states: (1:N) un estado puede aplicarse a varios usuarios.
	-- Obtener todos los usuarios con su estado 
SELECT u.id_user, u.first_name, u.last_name, s.description AS estado
FROM users u
JOIN states s ON u.state_id = s.id_state;

-- 2) exercises → categories: (N:1) cada ejercicio pertenece a una categoría.
	-- Ver ejercicios con su categoría
SELECT e.name AS ejercicio, e.sets, e.repetitions, c.name AS categoria
FROM exercises e
JOIN categories c ON e.category_id = c.id_category;    

-- 3) users_exercise → users: (N:N intermedia) usuarios pueden tener muchos ejercicios asignados.
	-- Mostrar los ejercicios asignados a cada usuario
SELECT u.username, e.name AS ejercicio, c.name AS categoria
FROM users u
JOIN users_exercise ue ON u.id_user = ue.user_id
JOIN exercises e ON ue.exercise_id = e.id_exercise
JOIN categories c ON e.category_id = c.id_category;

-- 4) users_exercise → exercises: (N:N intermedia) un ejercicio puede ser asignado a muchos usuarios.
	-- Total de ejercicios que tiene cada usuario
SELECT u.username, COUNT(ue.exercise_id) AS total_ejercicios
FROM users u
LEFT JOIN users_exercise ue ON u.id_user = ue.user_id
GROUP BY u.id_user, u.username;

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: admins; Type: TABLE; Schema: public; Owner: ellio
--

CREATE TABLE public.admins (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255) NOT NULL,
    name character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


CREATE SEQUENCE public.admins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: admins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ellio
--

ALTER SEQUENCE public.admins_id_seq OWNED BY public.admins.id;


--
-- Name: packages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.packages (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    duration integer DEFAULT 5,
    price numeric(10,2) NOT NULL,
    short_description text,
    description text,
    full_description text,
    location character varying(100) DEFAULT 'Tanzania'::character varying,
    tour_type character varying(50) DEFAULT 'Safari'::character varying,
    comfort_level character varying(50) DEFAULT 'Comfortable'::character varying,
    accommodation character varying(100) DEFAULT 'Luxury Lodge'::character varying,
    best_season jsonb DEFAULT '[]'::jsonb,
    difficulty_level character varying(50) DEFAULT 'Moderate'::character varying,
    destinations jsonb DEFAULT '[]'::jsonb,
    highlights jsonb DEFAULT '[]'::jsonb,
    itinerary jsonb DEFAULT '[]'::jsonb,
    accommodation_details jsonb DEFAULT '{"note": "", "inclusions": []}'::jsonb,
    activities jsonb DEFAULT '[]'::jsonb,
    included_activities jsonb DEFAULT '[]'::jsonb,
    group_size character varying(50),
    tour_features jsonb DEFAULT '[]'::jsonb,
    activities_transportation jsonb DEFAULT '{"vehicle": "", "transfer": "", "activities": []}'::jsonb,
    inclusions jsonb DEFAULT '{"excluded": [], "included": []}'::jsonb,
    getting_there jsonb DEFAULT '{"details": [], "description": ""}'::jsonb,
    tour_operator character varying(255) DEFAULT 'Soul of Tanzania'::character varying,
    pricing jsonb DEFAULT '{"base_price": "", "group_discounts": [], "seasonal_pricing": []}'::jsonb,
    image character varying(500),
    gallery jsonb DEFAULT '[]'::jsonb,
    policies jsonb DEFAULT '{"insurance": "", "cancellation": "", "health_safety": ""}'::jsonb,
    rating numeric(3,2) DEFAULT 4.8,
    review_count integer DEFAULT 0,
    group_size_min integer DEFAULT 1,
    group_size_max integer DEFAULT 6,
    featured boolean DEFAULT false,
    popular boolean DEFAULT false,
    status character varying(20) DEFAULT 'draft'::character varying,
    is_draft boolean DEFAULT true,
    published_at timestamp without time zone,
    availability boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    groupsize character varying(100),
    tourfeatures jsonb,
    activitiestransportation jsonb,
    gettingthere jsonb,
    touroperator character varying(255) DEFAULT 'Soul of Tanzania'::character varying,
    reviewcount integer DEFAULT 0,
    route jsonb,
    accommodationmeals jsonb,
    rates jsonb
);




CREATE SEQUENCE public.packages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: packages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.packages_id_seq OWNED BY public.packages.id;


--
-- Name: proposals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proposals (
    id integer NOT NULL,
    activities jsonb DEFAULT '[]'::jsonb NOT NULL,
    days integer NOT NULL,
    travel_with character varying(255) NOT NULL,
    arrival_date date NOT NULL,
    budget integer NOT NULL,
    adults integer NOT NULL,
    children integer NOT NULL,
    adult_ages jsonb DEFAULT '[]'::jsonb NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    alternate_phone character varying(255),
    country character varying(255) NOT NULL,
    notes text,
    newsletter boolean DEFAULT false NOT NULL,
    coupon character varying(255),
    created_at timestamp with time zone DEFAULT now(),
    status character varying(255) DEFAULT 'new'::character varying,
    updated_at timestamp without time zone
);


CREATE SEQUENCE public.proposals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: proposals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proposals_id_seq OWNED BY public.proposals.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: ellio
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    admin_id integer NOT NULL,
    session_id character varying(255) NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);



--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: ellio
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ellio
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: admins id; Type: DEFAULT; Schema: public; Owner: ellio
--

ALTER TABLE ONLY public.admins ALTER COLUMN id SET DEFAULT nextval('public.admins_id_seq'::regclass);


--
-- Name: packages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packages ALTER COLUMN id SET DEFAULT nextval('public.packages_id_seq'::regclass);


--
-- Name: proposals id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proposals ALTER COLUMN id SET DEFAULT nextval('public.proposals_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: ellio
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: ellio
--

INSERT INTO public.admins (id, email, password_hash, name, created_at, updated_at) VALUES (1, 'admin@safari1.com', '$2b$10$2DrVIzYLxO55L32jedYeE.bvVRTdkySAmtt6Bl.540TDHquW.16j2', 'Admin User', '2025-11-28 18:18:13.468762', '2025-11-28 18:18:13.468762');


--
-- Data for Name: packages; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.packages (id, name, slug, duration, price, short_description, description, full_description, location, tour_type, comfort_level, accommodation, best_season, difficulty_level, destinations, highlights, itinerary, accommodation_details, activities, included_activities, group_size, tour_features, activities_transportation, inclusions, getting_there, tour_operator, pricing, image, gallery, policies, rating, review_count, group_size_min, group_size_max, featured, popular, status, is_draft, published_at, availability, created_at, updated_at, groupsize, tourfeatures, activitiestransportation, gettingthere, touroperator, reviewcount, route, accommodationmeals, rates) VALUES (12, 'FFUUUk', 'f', 5, 10.00, '', '', '', 'Tanzania', 'Safari', 'Comfortable', 'Luxury Lodge', '[]', 'Moderate', '[]', '[]', '[{"day": 1, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}, {"day": 2, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}, {"day": 3, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}, {"day": 4, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}, {"day": 5, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}]', '{"note": "", "inclusions": []}', '[]', '[]', '1-6 People', '[]', '{"vehicle": "", "transfer": "", "activities": []}', '{"excluded": [], "included": []}', '{"details": ["International flights to major airports", "Airport transfers included", "Domestic flights if required"], "description": "Travel to Tanzania for your adventure."}', 'Soul of Tanzania', '{"base_price": "10", "group_discounts": [{"discount": 10, "min_people": 2}, {"discount": 15, "min_people": 4}, {"discount": 20, "min_people": 6}], "seasonal_pricing": [{"price": "", "season": "Low", "end_month": "March", "start_month": "January"}, {"price": "", "season": "Shoulder", "end_month": "June", "start_month": "April"}, {"price": "", "season": "High", "end_month": "December", "start_month": "July"}]}', '', '[]', '{"insurance": "", "cancellation": "", "health_safety": ""}', 4.80, 0, 1, 6, true, false, 'published', false, '2025-11-30 20:49:02.627', true, '2025-11-30 20:49:02.627', '2025-11-30 20:49:02.627', NULL, NULL, NULL, NULL, 'Soul of Tanzania', 0, NULL, NULL, NULL), (13, 'xdeedde', 'dxx', 5, 43.00, '', '', '', 'Tanzania', 'Safari', 'Comfortable', 'Luxury Lodge', '[]', 'Moderate', '[]', '[]', '[{"day": 1, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}, {"day": 2, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}, {"day": 3, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}, {"day": 4, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}, {"day": 5, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}]', '{"note": "", "inclusions": []}', '[]', '[]', '1-6 People', '[]', '{"vehicle": "", "transfer": "", "activities": []}', '{"excluded": [], "included": []}', '{"details": ["International flights to major airports", "Airport transfers included", "Domestic flights if required"], "description": "Travel to Tanzania for your adventure."}', 'Soul of Tanzania', '{"base_price": "43", "group_discounts": [{"discount": 10, "min_people": 2}, {"discount": 15, "min_people": 4}, {"discount": 20, "min_people": 6}], "seasonal_pricing": [{"price": "", "season": "Low", "end_month": "March", "start_month": "January"}, {"price": "", "season": "Shoulder", "end_month": "June", "start_month": "April"}, {"price": "", "season": "High", "end_month": "December", "start_month": "July"}]}', '', '[]', '{"insurance": "", "cancellation": "", "health_safety": ""}', 4.80, 0, 1, 6, true, true, 'published', false, '2025-11-30 20:58:35.833', true, '2025-11-30 20:58:35.833', '2025-11-30 20:58:35.833', NULL, NULL, NULL, NULL, 'Soul of Tanzania', 0, NULL, NULL, NULL), (14, 'Luxury Pack', 'safar-tanz', 10, 90.00, NULL, NULL, NULL, 'Tanzania', 'Safari', 'Comfortable', 'Luxury Lodge', '["January", "April", "December"]', 'Moderate', '["Serengeti National Park"]', '[]', '[{"day": 1, "meals": {"lunch": false, "dinner": true, "breakfast": true}, "title": "Arusha", "description": "ertyuiopzxcvbnm, ertyuiopqw   wiqmn", "accommodation": ""}, {"day": 2, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}, {"day": 3, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}, {"day": 4, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}, {"day": 5, "meals": {"lunch": false, "dinner": false, "breakfast": false}, "title": "", "description": "", "accommodation": ""}]', '{"note": "", "inclusions": []}', '[]', '[]', '1-6 People', '[]', '{"vehicle": "", "transfer": "", "activities": []}', '{"excluded": [], "included": []}', '{"details": [], "description": ""}', 'Soul of Tanzania', '{"base_price": 90, "group_discounts": [{"discount": 9, "min_people": 10}, {"discount": 10, "min_people": 2}, {"discount": 10, "min_people": 2}], "seasonal_pricing": [{"price": "190", "season": "Low", "end_month": "March", "start_month": "January"}, {"price": "350", "season": "Shoulder", "end_month": "June", "start_month": "April"}, {"price": "1000", "season": "High", "end_month": "December", "start_month": "July"}]}', '/uploads/ba7c7aa1-5332-4271-b821-d52b2fbffaf3.png', '["/uploads/795d4909-0428-473c-a3b7-d151e36c3b37.png", "/uploads/df83e09c-bf54-4bfd-8871-25b716b3f0ba.jpg"]', '{"insurance": "", "cancellation": "", "health_safety": ""}', 4.80, 0, 1, 6, true, true, 'published', false, '2025-11-30 23:24:41.733', true, '2025-11-30 23:24:41.733', '2025-11-30 23:28:04.308109', NULL, NULL, NULL, NULL, 'Soul of Tanzania', 0, NULL, NULL, NULL);


--
-- Data for Name: proposals; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.proposals (id, activities, days, travel_with, arrival_date, budget, adults, children, adult_ages, first_name, last_name, email, phone, alternate_phone, country, notes, newsletter, coupon, created_at, status, updated_at) VALUES (4, '["safari", "kilimanjaro"]', 12, 'couple', '2025-11-04', 1500, 2, 1, '[]', 'Alex', 'Johan', 'alexjohan8127@gmail.com', '03339089989', '03032398120', 'United States', '\nQwen3-Max\n6:37 PM\nYou''re on the right track—your admin proposals page already displays most fields and includes a status dropdown that defaults to the current status (e.g., "new" if not set), which aligns with your goal of having a default "Pending"-like state.\n\n', false, NULL, '2025-11-30 05:48:32.713913+05', 'closed', '2025-11-30 23:11:15.383846');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: ellio
--

INSERT INTO public.sessions (id, admin_id, session_id, expires_at, created_at) VALUES (7, 1, 'e577652d35c32f58943abfb04e49df943aa546af4371ad0ea9a4016c0c283818', '2025-12-01 20:27:06.398', '2025-11-30 20:27:06.399314');


--
-- Name: admins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ellio
--

SELECT pg_catalog.setval('public.admins_id_seq', 1, true);


--
-- Name: packages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.packages_id_seq', 14, true);


--
-- Name: proposals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proposals_id_seq', 5, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ellio
--

SELECT pg_catalog.setval('public.sessions_id_seq', 7, true);


--
-- Name: admins admins_email_key; Type: CONSTRAINT; Schema: public; Owner: ellio
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_email_key UNIQUE (email);


--
-- Name: admins admins_pkey; Type: CONSTRAINT; Schema: public; Owner: ellio
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (id);


--
-- Name: packages packages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packages
    ADD CONSTRAINT packages_pkey PRIMARY KEY (id);


--
-- Name: packages packages_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packages
    ADD CONSTRAINT packages_slug_key UNIQUE (slug);


--
-- Name: proposals proposals_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proposals
    ADD CONSTRAINT proposals_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: ellio
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_session_id_key; Type: CONSTRAINT; Schema: public; Owner: ellio
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_session_id_key UNIQUE (session_id);


--
-- Name: idx_admins_email; Type: INDEX; Schema: public; Owner: ellio
--

CREATE INDEX idx_admins_email ON public.admins USING btree (email);


--
-- Name: idx_sessions_session_id; Type: INDEX; Schema: public; Owner: ellio
--

CREATE INDEX idx_sessions_session_id ON public.sessions USING btree (session_id);


--
-- Name: sessions sessions_admin_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ellio
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_admin_id_fkey FOREIGN KEY (admin_id) REFERENCES public.admins(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--


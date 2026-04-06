# RSU-Portfolio Backend

---

## Run with Docker

```bash
docker compose up -d --build
```

---

## PostgreSQL

### Enter psql

```bash id="m2z5xf"
docker exec -it rsu-port-db psql -U ${PG_USER} -d ${PG_DATABASE}
```

###  Exit

```bash id="z4ph2k"
\q
```

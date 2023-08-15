FROM postgres:latest

# Set environment variables
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=training

# Create a data directory owned by the non-root user
RUN mkdir -p /var/lib/postgresql/data
RUN chown -R postgres:postgres /var/lib/postgresql/data

# Set the non-root user as the default user
USER postgres

# Start PostgreSQL server
CMD ["postgres"]
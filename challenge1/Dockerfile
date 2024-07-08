# Use the official Nginx image from the Docker Hub
FROM nginx:latest

# Copy the contents of the public folder to the Nginx html directory
COPY public /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]

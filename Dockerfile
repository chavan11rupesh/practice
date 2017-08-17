FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/practice.jar /practice/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/practice/app.jar"]

Deploy your application on Kubernetes. Add your manifest/s to your GitHub Repo in a folder named kubernetes-manifests. Your containers must all be pulled from DockerHub. The Readme must be clear on the deployment process (from image building to creating cluster services). It must include the following components:

1. The application and any dependencies (e.g. databases, frontend backend, etc).

2. Pods

3. Services

4. Ingress (no load balancer service for A)

5. Autoscaling (does not need to be instance-level)

6. Storage Persistence (if using DB)

7. Make sure node is installed on your machine. If not, install it from [here](https://nodejs.org/en/download/)

8. Install the dependencies by running `npm install`

9. Rename the `.env.example` file to `.env`

10. Create a pod for the application by running `kubectl apply -f kubernetes-manifests/deployment.yaml`

11. Create a service for the application by running `kubectl apply -f kubernetes-manifests/service.yaml`

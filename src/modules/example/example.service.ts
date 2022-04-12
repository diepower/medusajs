import { Service } from 'medusa-extender';
import { EntityManager } from 'typeorm';

type ContainerInjection = {
    manager: EntityManager;
};

@Service()
export class ExampleService {
	static resolutionKey = 'exampleService';
	
    constructor(private readonly container: ContainerInjection, private readonly config: any) {}
}
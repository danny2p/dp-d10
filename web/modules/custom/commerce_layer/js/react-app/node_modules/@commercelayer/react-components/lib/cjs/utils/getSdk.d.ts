import Sdk from '@commercelayer/sdk';
import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
export default function getSdk({ endpoint, accessToken }: CommerceLayerConfig): ReturnType<typeof Sdk>;

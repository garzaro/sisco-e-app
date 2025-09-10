import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
    BarChart3,
    Users,
    TrendingUp,
    DollarSign,
    Activity,
    Clock,
    CheckCircle,
    AlertCircle
} from 'lucide-react';

const Dashboard = () => {
    const stats = [
        {
            title: 'Receita Total',
            value: 'R$ 45.231,89',
            change: '+20.1%',
            changeType: 'positive',
            icon: DollarSign
        },
        {
            title: 'Usuários Ativos',
            value: '2.350',
            change: '+180.1%',
            changeType: 'positive',
            icon: Users
        },
        {
            title: 'Taxa de Conversão',
            value: '12.5%',
            change: '+19%',
            changeType: 'positive',
            icon: TrendingUp
        },
        {
            title: 'Projetos Ativos',
            value: '573',
            change: '+201',
            changeType: 'positive',
            icon: BarChart3
        }
    ];

    const recentActivities = [
        {
            id: 1,
            type: 'success',
            message: 'Novo usuário cadastrado',
            time: '2 minutos atrás',
            user: 'Maria Santos'
        },
        {
            id: 2,
            type: 'warning',
            message: 'Sistema de backup iniciado',
            time: '5 minutos atrás',
            user: 'Sistema'
        },
        {
            id: 3,
            type: 'success',
            message: 'Projeto "Website 2024" finalizado',
            time: '12 minutos atrás',
            user: 'João Silva'
        },
        {
            id: 4,
            type: 'info',
            message: 'Relatório mensal gerado',
            time: '1 hora atrás',
            user: 'Sistema'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-600 mt-2">Bem-vindo de volta! Aqui está um resumo das suas atividades.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-600">
                                        {stat.title}
                                    </CardTitle>
                                    <Icon className="h-5 w-5 text-gray-400" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                    <div className="flex items-center mt-1">
                                        <Badge variant={stat.changeType === 'positive' ? 'default' : 'destructive'} className="text-xs">
                                            {stat.change}
                                        </Badge>
                                        <span className="text-xs text-gray-500 ml-2">vs mês anterior</span>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Activity className="h-5 w-5" />
                                <span>Ações Rápidas</span>
                            </CardTitle>
                            <CardDescription>
                                Acesse rapidamente as funcionalidades mais utilizadas
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button className="w-full justify-start" variant="outline">
                                <Users className="mr-2 h-4 w-4" />
                                Gerenciar Equipe
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <BarChart3 className="mr-2 h-4 w-4" />
                                Ver Relatórios
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <TrendingUp className="mr-2 h-4 w-4" />
                                Análise de Performance
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Recent Activities */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Clock className="h-5 w-5" />
                                <span>Atividades Recentes</span>
                            </CardTitle>
                            <CardDescription>
                                Últimas atividades do sistema
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentActivities.map((activity) => (
                                    <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                                        <div className="flex-shrink-0">
                                            {activity.type === 'success' && (
                                                <CheckCircle className="h-5 w-5 text-green-500" />
                                            )}
                                            {activity.type === 'warning' && (
                                                <AlertCircle className="h-5 w-5 text-yellow-500" />
                                            )}
                                            {activity.type === 'info' && (
                                                <Activity className="h-5 w-5 text-blue-500" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                                            <div className="flex items-center mt-1 text-xs text-gray-500">
                                                <span>{activity.user}</span>
                                                <span className="mx-1">•</span>
                                                <span>{activity.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;